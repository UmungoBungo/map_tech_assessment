import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function FullTitleLogo() {
  const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "fullTitle.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  return <Img
    className="mx-auto w-auto"
    fluid={data.file.childImageSharp.fluid}
    alt="makemy.games"
  />
}