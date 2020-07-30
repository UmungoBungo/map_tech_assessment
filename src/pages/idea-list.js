import React, { Fragment } from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby'
import Ideas from '../components/Ideas/Ideas'

function IdeaList() {
    const graphqlData =
        useStaticQuery(graphql`
            query {
                currentBuildDate {
                    currentDate
                }
            }
        `)


    const buildDate = Date.parse(graphqlData.currentBuildDate.currentDate)/1000

    return (
        <Layout>
            <Fragment>
                <Ideas graphqlData={pagesCreated} buildDate={buildDate} />
            </Fragment>
        </Layout>
    )
}

export default IdeaList;
