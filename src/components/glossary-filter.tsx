"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GlossaryTerm } from "@/lib/glossary";

interface GlossaryFilterProps {
  terms: GlossaryTerm[];
  categories: string[];
}

export function GlossaryFilter({ terms, categories }: GlossaryFilterProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sliderStyle, setSliderStyle] = useState<React.CSSProperties>({});
  const tabsRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const allCategories = ["All", ...categories];

  const filteredTerms =
    activeCategory === "All"
      ? terms
      : terms.filter((t) => t.category === activeCategory);

  const getCategoryCount = (cat: string) => {
    if (cat === "All") return terms.length;
    return terms.filter((t) => t.category === cat).length;
  };

  useEffect(() => {
    const activeButton = buttonRefs.current.get(activeCategory);
    const container = tabsRef.current;
    if (activeButton && container) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();
      setSliderStyle({
        left: buttonRect.left - containerRect.left,
        width: buttonRect.width,
      });
    }
  }, [activeCategory]);

  return (
    <>
      {/* Segmented Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div
          ref={tabsRef}
          className="relative inline-flex items-center rounded-lg border border-border/60 bg-secondary/20 p-1"
        >
          {/* Sliding highlight */}
          <div
            className="absolute top-1 bottom-1 rounded-md bg-primary shadow-sm transition-all duration-300 ease-out"
            style={sliderStyle}
          />

          {allCategories.map((category) => (
            <button
              key={category}
              ref={(el) => {
                if (el) buttonRefs.current.set(category, el);
              }}
              onClick={() => setActiveCategory(category)}
              className={`
                relative z-10 px-5 py-2 rounded-md text-sm font-medium transition-colors duration-200
                ${
                  activeCategory === category
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }
              `}
            >
              {category}
              <span
                className={`ml-1.5 text-xs tabular-nums ${
                  activeCategory === category
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground/50"
                }`}
              >
                {getCategoryCount(category)}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Terms Grid */}
      <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredTerms.map((item) => (
          <div key={item.slug} className="relative group">
            <Link
              href={`/glossary/${item.slug}`}
              className="absolute inset-0 z-10"
              aria-label={`Read definition for ${item.term}`}
            >
              <span className="sr-only">Read definition for {item.term}</span>
            </Link>
            <Card className="hover:border-primary/50 transition-colors h-full flex flex-col group-hover:border-primary/50">
              <CardHeader className="pb-3">
                <dt className="text-lg font-semibold leading-none tracking-tight">
                  {item.term}
                </dt>
                <span className="text-xs text-muted-foreground/60 mt-1.5">
                  {item.category}
                </span>
              </CardHeader>
              <CardContent className="flex-grow">
                <dd className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {item.definition}
                </dd>
              </CardContent>
            </Card>
          </div>
        ))}
      </dl>

      {/* Count indicator */}
      <p className="text-center text-sm text-muted-foreground/50 mt-8">
        Showing {filteredTerms.length} of {terms.length} terms
      </p>
    </>
  );
}
