import React from 'react'
import { graphql } from 'gatsby'
import IdeaDetail from '../components/Ideas/IdeaPageDetail'

import Layout from '../components/layout'

// export const query = graphql`
// query(
//     $slug: String!
//     )
//     {
//     idea(
//         fields: {
//         slug: {
//             eq: $slug
//         }
//         }
//     ) {
//         id,
//         title,
//         tldr,
//         described,
//         user{
//             id
//         },
//         fields {
//             slug
//         }
//       }
// }
// `

const Idea = (props) => {
    const idea = props.data.idea

    return (
        <Layout>
            <IdeaDetail idea={idea} />
        </Layout>
    )
}

export default Idea