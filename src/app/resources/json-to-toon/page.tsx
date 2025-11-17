
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal, Minus, Equal, Percent } from 'lucide-react';
import { encode, decode } from '@toon-format/toon';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const placeholderJson = {
  users: [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' },
  ],
};

export default function JsonToToonPage() {
  const [jsonString, setJsonString] = useState(JSON.stringify(placeholderJson, null, 2));
  const [toonString, setToonString] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [jsonTokens, setJsonTokens] = useState(0);
  const [toonTokens, setToonTokens] = useState(0);
  const [percentSaved, setPercentSaved] = useState(0);

  useEffect(() => {
    try {
      const parsedJson = JSON.parse(jsonString);
      const encodedToon = encode(parsedJson);
      setToonString(encodedToon);
      updateStats(jsonString, encodedToon);
      setError(null);
    } catch (e) {
      // Errors will be caught on change, so we can ignore initial parse errors
    }
  }, []);

  const updateStats = (json: string, toon: string) => {
    const jsonLen = json.length;
    const toonLen = toon.length;
    setJsonTokens(jsonLen);
    setToonTokens(toonLen);

    if (jsonLen > 0) {
      const saved = ((jsonLen - toonLen) / jsonLen) * 100;
      setPercentSaved(Math.round(saved * 100) / 100); // Round to two decimal places
    } else {
      setPercentSaved(0);
    }
  };

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newJsonString = e.target.value;
    setJsonString(newJsonString);
    try {
      if (newJsonString.trim() === '') {
        setToonString('');
        updateStats('', '');
        setError(null);
        return;
      }
      const parsedJson = JSON.parse(newJsonString);
      const encodedToon = encode(parsedJson);
      setToonString(encodedToon);
      updateStats(newJsonString, encodedToon);
      setError(null);
    } catch (err: any) {
      setError('Invalid JSON format.');
    }
  };

  const handleToonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newToonString = e.target.value;
    setToonString(newToonString);
    try {
       if (newToonString.trim() === '') {
        setJsonString('');
        updateStats('', '');
        setError(null);
        return;
      }
      const decodedJson = decode(newToonString);
      const formattedJson = JSON.stringify(decodedJson, null, 2);
      setJsonString(formattedJson);
      updateStats(formattedJson, newToonString);
      setError(null);
    } catch (err: any) {
      setError('Invalid TOON format.');
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-semibold tracking-tight">JSON to TOON Converter</h1>
              <p className="mt-3 text-base text-muted-foreground max-w-3xl mx-auto">
                Transform dense JSON into the lightweight TOON format. Reduce token consumption for LLMs, cut costs, and improve AI performance.
              </p>
               <p className="mt-2 text-sm text-muted-foreground">
                100% client-side conversion. Your data never leaves your browser.
              </p>
            </div>

            {error && (
              <Alert variant="destructive" className="mb-4">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="grid md:grid-cols-2 gap-4 items-start">
              <div className="flex flex-col gap-2">
                <Label htmlFor="json-input">JSON</Label>
                <Textarea
                  id="json-input"
                  value={jsonString}
                  onChange={handleJsonChange}
                  rows={18}
                  placeholder="Paste your JSON here"
                  className="font-mono text-sm h-full"
                  aria-label="JSON Input"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="toon-input">TOON (Token-Oriented Object Notation)</Label>
                <Textarea
                  id="toon-input"
                  value={toonString}
                  onChange={handleToonChange}
                  rows={18}
                  placeholder="Paste your TOON here"
                  className="font-mono text-sm h-full"
                  aria-label="TOON Input"
                />
              </div>
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Conversion Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">JSON Characters</p>
                    <p className="text-2xl font-bold">{jsonTokens}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">TOON Characters</p>
                    <p className="text-2xl font-bold">{toonTokens}</p>
                  </div>
                   <div>
                    <p className="text-sm text-muted-foreground">Characters Saved</p>
                    <p className="text-2xl font-bold text-primary">{percentSaved}%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
