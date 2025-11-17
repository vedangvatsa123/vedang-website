
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { encode, decode } from '@toon-format/toon';
import { Label } from '@/components/ui/label';

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

  useEffect(() => {
    try {
      const parsedJson = JSON.parse(jsonString);
      setToonString(encode(parsedJson));
      setError(null);
    } catch (e) {
      // Errors will be caught on change, so we can ignore initial parse errors
    }
  }, [jsonString]);

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newJsonString = e.target.value;
    setJsonString(newJsonString);
    try {
      const parsedJson = JSON.parse(newJsonString);
      setToonString(encode(parsedJson));
      setError(null);
    } catch (err: any) {
      if (newJsonString.trim() !== '') {
        setError('Invalid JSON format.');
      } else {
        setError(null);
        setToonString('');
      }
    }
  };

  const handleToonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newToonString = e.target.value;
    setToonString(newToonString);
    try {
      const decodedJson = decode(newToonString);
      setJsonString(JSON.stringify(decodedJson, null, 2));
      setError(null);
    } catch (err: any) {
       if (newToonString.trim() !== '') {
        setError('Invalid TOON format.');
      } else {
        setError(null);
        setJsonString('');
      }
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
              <p className="mt-3 text-base text-muted-foreground">
                A converter for JSON and Token-Oriented Object Notation (TOON). Edit either side to see the live conversion.
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
