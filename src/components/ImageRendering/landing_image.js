import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function FullTitleLogo() {
  const data = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "landingImage.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `)
  return <Img
    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
    fluid={data.file.childImageSharp.fluid}
    alt="landing_image"
  />
}