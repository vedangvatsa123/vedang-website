
import { z } from 'genkit';

export const BrainrotInputSchema = z.string().describe('The script for the video.');
export type BrainrotInput = z.infer<typeof BrainrotInputSchema>;

export const BrainrotOutputSchema = z.object({
  video: z.string().describe('The generated video as a data URI.'),
});
export type BrainrotOutput = z.infer<typeof BrainrotOutputSchema>;
