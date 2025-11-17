
'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { JsonToon } from '@/components/json-toon';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const placeholderJson = `{
  "character": {
    "name": "Super Coder",
    "powers": [
      "Instant Debugging",
      "Infinite Coffee",
      "Sleep-resistant"
    ],
    "attributes": {
      "strength": 10,
      "intelligence": 100,
      "speed": 50
    },
    "isHero": true
  }
}`;

export default function JsonToToonPage() {
  const [jsonInput, setJsonInput] = useState(placeholderJson);
  const [toonData, setToonData] = useState<object | null>(JSON.parse(placeholderJson));
  const [error, setError] = useState<string | null>(null);

  const handleConvert = () => {
    try {
      const parsedJson = JSON.parse(jsonInput);
      setToonData(parsedJson);
      setError(null);
    } catch (e: any) {
      setError('Invalid JSON. Please check your syntax.');
      setToonData(null);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-semibold tracking-tight">JSON to TOON Converter</h1>
              <p className="mt-3 text-base text-muted-foreground">
                Paste your JSON into the box below and click "Convert" to see it visualized in a "TOON" style.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-4">
                <Textarea
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  rows={15}
                  placeholder="Paste your JSON here"
                  className="font-mono text-sm"
                />
                <Button onClick={handleConvert}>Convert to TOON</Button>
                {error && (
                  <Alert variant="destructive">
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-4">TOON Output</h2>
                <div className="h-[400px] overflow-auto">
                  {toonData && <JsonToon data={toonData} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
