const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'Idea') {
        const underscoredIdeaTitle = node.title.replace(/ /g,"_")
        const slug = node.id + '/' + underscoredIdeaTitle
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const ideaTemplate = path.resolve('./src/templates/idea.js')
    const res = await graphql(`
        query {
            allIdea {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allIdea.edges.forEach((edge) => {
        createPage({
            component: ideaTemplate,
            path: `/idea/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}