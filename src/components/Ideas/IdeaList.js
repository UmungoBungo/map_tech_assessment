import React from 'react';

import IdeaPreviewCard from './IdeaPreviewCard';

const IdeaList = ({ ideas }) => (

  <section className="text-gray-400 body-font">
    <div className="flex items-center justify-center py-12 px-0 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <ul>
          {ideas.map(idea => (
           <IdeaPreviewCard
            slug={idea.slug}
            ideaTitle={idea.title}
            ideaContent={idea.tldr}
            pageExists={idea.pageExists}
            pledged={'$128'}
          />
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default IdeaList;
