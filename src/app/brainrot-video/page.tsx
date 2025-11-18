
'use client';

import { useState } from 'react';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader, Terminal } from 'lucide-react';
import { generateBrainrotVideo } from '@/ai/flows/brainrot-video-flow';

export default function BrainrotVideoPage() {
  const [script, setScript] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!script) {
      setError('Please enter a script for the video.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setVideoUrl(null);

    try {
      const result = await generateBrainrotVideo(script);
      if (result.video) {
        setVideoUrl(result.video);
      } else {
        throw new Error('Video generation failed. Please try again.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'An unexpected error occurred during video generation.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-semibold tracking-tight">AI Brainrot Video Generator</h1>
              <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
                Enter a script and let our AI generate a "brainrot" style video complete with AI-generated voice and footage. Perfect for short, attention-grabbing content.
              </p>
               <p className="mt-2 text-sm text-muted-foreground">
                Note: Video generation can take 1-2 minutes. Please be patient.
              </p>
            </div>

            {error && (
              <Alert variant="destructive" className="mb-6">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Create Your Video</CardTitle>
                <CardDescription>
                  Enter the script you want the AI to narrate in the video.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid w-full gap-2">
                  <Label htmlFor="script">Video Script</Label>
                  <Textarea
                    id="script"
                    placeholder="e.g., 'Here are 5 facts about the Roman Empire that will blow your mind...'"
                    value={script}
                    onChange={(e) => setScript(e.target.value)}
                    rows={6}
                    disabled={isLoading}
                  />
                </div>
                <Button onClick={handleGenerate} disabled={isLoading} className="w-full">
                  {isLoading ? (
                    <>
                      <Loader className="mr-2 h-4 w-4 animate-spin" />
                      Generating Video...
                    </>
                  ) : (
                    'Generate Video'
                  )}
                </Button>
              </CardContent>
            </Card>

            {videoUrl && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Your Video is Ready!</CardTitle>
                </CardHeader>
                <CardContent>
                  <video controls src={videoUrl} className="w-full rounded-md" />
                   <div className="mt-4 flex justify-end">
                    <Button asChild>
                      <a href={videoUrl} download="brainrot_video.mp4">
                        Download Video
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
