import React from 'react';
import { Link } from 'gatsby';
import * as ROUTES from '../../constants/routes';

const IdeaPreviewCard = ({ idea, pageExists, pledged }) => (
    <div className="overflow-hidden shadow-xl rounded-lg my-12 border border-black">
        <Link to={pageExists ? (ROUTES.IDEA_PAGE + '/' + idea.slug) : ROUTES.PREBUILD_IDEA } state={{ idea: idea }}>
            <h3 className="bg-white px-4 py-5 sm:px-6 text-lg leading-6 font-medium text-gray-900">
                {idea.title}
            </h3>
        </Link>
        <div className="bg-indigo-100 px-4 py-5 sm:p-6 text-sm leading-5 text-gray-900">
            <div>
                {idea.tldr}
            </div>
            <div className="flex justify-end pt-5 text-indigo-700">
                {pledged}
            </div>
        </div>
    </div >
);

export default IdeaPreviewCard;