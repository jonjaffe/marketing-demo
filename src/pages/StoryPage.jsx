import React, { useState } from 'react';
import { NotFound } from '../components/NotFound';
import { BuilderComponent, useIsPreviewing, BuilderContent, builder } from '@builder.io/react';
import { CircularProgress } from '@material-ui/core';
import { StoryBody } from '../components/StoryBody';

// Match any page we don't have a hardcoded URL for and check
// Builder for a matching page. Otherwise show our 404 page
// For server side rendering see
//   Next.js: https://github.com/BuilderIO/builder/tree/main/packages/react/examples/next-js
//   Gatsby: https://github.com/BuilderIO/gatsby-starter-builder
export const StoryPage = () => {
  const [notFound, setNotFound] = useState(false);
  const isPreviewingInBuilder = useIsPreviewing();


  return (
    <>
                <BuilderContent
              {...(!isPreviewing && { content: story-page })}
              modelName="story-page"
              options={{ includeRefs: true }}
              isStatic
            >
              {(data, loading, fullContent) =>
                data && (
                 <div>hey
                    <StoryBody content={fullContent} />
                 </div>
                )
              }
            </BuilderContent>
      {/* {!notFound ? (
        <div>
hey
        <BuilderComponent
          model="story-page"
          contentLoaded={content => {
            if (!content && !isPreviewingInBuilder) {
              setNotFound(true);
            }
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', padding: 100 }}>
            <CircularProgress color="inherit" disableShrink />
          </div>
        </BuilderComponent>
        </div>
      ) : (
        <NotFound /> // Your 404 content
      )} */}
    </>
  );
};
