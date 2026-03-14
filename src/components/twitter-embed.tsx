'use client';

import { useEffect, useRef } from 'react';

interface TwitterEmbedProps {
  tweetId: string;
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
        createTweet: (
          tweetId: string,
          container: HTMLElement,
          options?: Record<string, unknown>
        ) => Promise<HTMLElement>;
      };
    };
  }
}

export function TwitterEmbed({ tweetId }: TwitterEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTweet = () => {
      if (window.twttr && containerRef.current) {
        // Clear any existing content
        containerRef.current.innerHTML = '';
        
        window.twttr.widgets.createTweet(tweetId, containerRef.current, {
          dnt: true,
          align: 'center',
        });
      }
    };

    // Check if Twitter script is already loaded
    if (window.twttr) {
      loadTweet();
    } else {
      // Load the Twitter widget script
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = loadTweet;
      document.body.appendChild(script);
    }
  }, [tweetId]);

  return (
    <div ref={containerRef} className="flex justify-center min-h-[200px]">
      <p className="text-muted-foreground">Loading tweet...</p>
    </div>
  );
}
