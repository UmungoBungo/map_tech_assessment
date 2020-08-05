import React from 'react'
import Layout from '../components/layout'
import IdeaDetail from '../components/Ideas/IdeaPageDetail'

const Idea = ({location}) => {
    const idea = location.state.idea

    return (
        <Layout>
            <IdeaDetail idea={idea} />
        </Layout>
    )
}

export default Idea