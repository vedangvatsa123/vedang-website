
'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

interface JsonToonProps {
  data: object;
}

const renderValue = (value: any, key: string | number) => {
  if (typeof value === 'object' && value !== null) {
    return <JsonNode data={value} name={String(key)} key={key} />;
  }

  const valueType = typeof value;
  let colorClass = '';

  switch (valueType) {
    case 'string':
      colorClass = 'text-green-600 dark:text-green-400';
      break;
    case 'number':
      colorClass = 'text-blue-600 dark:text-blue-400';
      break;
    case 'boolean':
      colorClass = 'text-purple-600 dark:text-purple-400';
      break;
    default:
      colorClass = 'text-gray-500';
  }

  return (
    <span key={key} className={colorClass}>
      {JSON.stringify(value)}
    </span>
  );
};

const JsonNode: React.FC<{ data: any; name: string }> = ({ data, name }) => {
  const isArray = Array.isArray(data);
  const entries = Object.entries(data);

  return (
    <Card className="my-2 bg-muted/50 border-dashed">
      <CardHeader className="p-3">
        <CardTitle className="text-base font-semibold text-primary">{name}</CardTitle>
      </CardHeader>
      <CardContent className="p-3 pt-0 pl-6 space-y-2 font-mono text-sm">
        {entries.map(([key, value]) => (
          <div key={key} className="flex items-start">
            <span className="text-foreground/80 font-medium mr-2">{key}:</span>
            <div className="flex-1">{renderValue(value, key)}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export const JsonToon: React.FC<JsonToonProps> = ({ data }) => {
  return <JsonNode data={data} name="Root" />;
};
