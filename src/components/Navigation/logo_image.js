import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function LogoImage() {
    const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `)
    return <Img
        className="block lg:hidden h-8 w-auto"
        fixed={data.file.childImageSharp.fixed}
        alt="makemy.games"
    />
}