import React, { Fragment } from 'react';
import Layout from '../components/layout';
import IdeaPreviewCard from '../components/Ideas/idea_preview_card'
import { Link, graphql, useStaticQuery } from 'gatsby'

const IdeaListPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allIdea {
                edges {
                    node {
                        title,
                        tldr,
                            fields {
                                slug
                            }
                        }
                }
            }
        }
    `)

    return (
        <Fragment>
            <section className="text-gray-400 body-font">
                <div className="flex items-center justify-center py-12 px-0 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full">
                        {data.allIdea.edges.map((edge) => {
                            return (
                                <IdeaPreviewCard
                                    ideaTitle={edge.node.title}
                                    ideaContent={edge.node.tldr}
                                    slug={edge.node.fields.slug}
                                    pledged={'$128'} />
                            )
                        }
                        )}
                    </div>
                </div>
            </section>
        </Fragment>)
};

export default () => (
    <Layout>
        <IdeaListPage />
    </Layout>
);
