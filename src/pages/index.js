import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  let data = useStaticQuery(graphql`
    query {
      allPostJson {
        nodes {
          alt
          localFile {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  let img = data.allPostJson.nodes[0].localFile
  let alt = data.allPostJson.nodes[0].alt

  return <Img fixed={img.childImageSharp.fixed} alt={alt} />
}
