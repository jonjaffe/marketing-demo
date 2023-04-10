import React from 'react';
import { BuilderComponent } from '@builder.io/react';

export const StoryBody = (content) => {
  return (
    <div className="max-w-2xl mx-auto">
      <BuilderComponent options={{ includeRefs: true }} model="story-page" content={content} />
    </div>
  );
}