
'use server';

/**
 * @fileOverview A flow to generate "brainrot" style videos from a script.
 * This flow combines text-to-speech and text-to-video generation.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import wav from 'wav';
import ffmpeg from 'fluent-ffmpeg';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { 
  BrainrotInputSchema, 
  BrainrotOutputSchema, 
  type BrainrotInput, 
  type BrainrotOutput 
} from './brainrot-video.types';


// Set the path for ffmpeg if it's not in the default PATH
// You might need to adjust this depending on your environment.
// ffmpeg.setFfmpegPath('/usr/bin/ffmpeg');


export async function generateBrainrotVideo(input: BrainrotInput): Promise<BrainrotOutput> {
  return brainrotVideoFlow(input);
}

// A simple utility to create a temporary file path
const tmpFile = (ext: string) => path.join(os.tmpdir(), `brainrot_${Date.now()}_${Math.random()}.${ext}`);

async function toWav(pcmData: Buffer): Promise<string> {
    const filePath = tmpFile('wav');
    return new Promise((resolve, reject) => {
        const writer = new wav.Writer({
            channels: 1,
            sampleRate: 24000,
            bitDepth: 16,
        });
        const fileStream = fs.createWriteStream(filePath);

        writer.pipe(fileStream);
        writer.on('error', reject);
        fileStream.on('finish', () => resolve(filePath));
        fileStream.on('error', reject);
        
        writer.write(pcmData);
        writer.end();
    });
}

const brainrotVideoFlow = ai.defineFlow(
  {
    name: 'brainrotVideoFlow',
    inputSchema: BrainrotInputSchema,
    outputSchema: BrainrotOutputSchema,
  },
  async (script) => {
    // Generate Audio and Video in parallel
    const [audioResult, videoOperationResult] = await Promise.all([
      // 1. Generate Text-to-Speech audio
      ai.generate({
        model: 'googleai/gemini-2.5-flash-preview-tts',
        config: { responseModalities: ['AUDIO'] },
        prompt: script,
      }),
      // 2. Generate video from the script
      ai.generate({
        model: 'googleai/veo-2.0-generate-001',
        prompt: `Create a cinematic, engaging video that illustrates the following script: "${script}". The style should be fast-paced and visually stimulating, suitable for short-form social media.`,
        config: {
          durationSeconds: 8,
          aspectRatio: '9:16',
        },
      }),
    ]);

    // Process audio
    if (!audioResult.media) {
      throw new Error('Audio generation failed.');
    }
    const audioBuffer = Buffer.from(audioResult.media.url.substring(audioResult.media.url.indexOf(',') + 1), 'base64');
    const audioFilePath = await toWav(audioBuffer);
    
    // Process video
    let operation = videoOperationResult.operation;
    if (!operation) {
      throw new Error('Expected video generation to return an operation.');
    }

    // Poll for video completion
    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 5000));
      operation = await ai.checkOperation(operation);
    }
    
    if (operation.error) {
        fs.unlinkSync(audioFilePath); // Clean up temp audio file
        throw new Error(`Video generation failed: ${operation.error.message}`);
    }

    const videoPart = operation.output?.message?.content.find(p => !!p.media);
    if (!videoPart?.media?.url) {
        fs.unlinkSync(audioFilePath); // Clean up temp audio file
        throw new Error('Generated video not found in operation result.');
    }

    // Download the generated video
    const videoFilePath = tmpFile('mp4');
    const fetch = (await import('node-fetch')).default;
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      fs.unlinkSync(audioFilePath);
      throw new Error('GEMINI_API_KEY environment variable is not set.');
    }
    const videoDownloadResponse = await fetch(`${videoPart.media.url}&key=${apiKey}`);

    if (!videoDownloadResponse.ok || !videoDownloadResponse.body) {
        fs.unlinkSync(audioFilePath);
        throw new Error(`Failed to download generated video. Status: ${videoDownloadResponse.status}`);
    }

    const videoFileStream = fs.createWriteStream(videoFilePath);
    await new Promise((resolve, reject) => {
        videoDownloadResponse.body.pipe(videoFileStream);
        videoDownloadResponse.body.on('error', reject);
        videoFileStream.on('finish', resolve);
    });

    // Combine audio and video using ffmpeg
    const outputFilePath = tmpFile('mp4');
    await new Promise<void>((resolve, reject) => {
        ffmpeg()
            .input(videoFilePath)
            .input(audioFilePath)
            .outputOptions([
                '-c:v copy',       // Copy video stream without re-encoding
                '-c:a aac',        // Re-encode audio to AAC
                '-shortest'        // Finish encoding when the shortest input stream ends
            ])
            .save(outputFilePath)
            .on('end', resolve)
            .on('error', (err) => {
                console.error("FFMPEG Error: ", err);
                reject(new Error('Failed to merge audio and video.'))
            });
    });

    // Read the final video into a buffer and convert to data URI
    const finalVideoBuffer = fs.readFileSync(outputFilePath);
    const videoDataUri = `data:video/mp4;base64,${finalVideoBuffer.toString('base64')}`;

    // Clean up temporary files
    fs.unlinkSync(audioFilePath);
    fs.unlinkSync(videoFilePath);
    fs.unlinkSync(outputFilePath);

    return {
      video: videoDataUri,
    };
  }
);
