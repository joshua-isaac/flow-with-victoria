import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import "./InstagramBlock.scss"

const INSTAGRAM_QUERY = graphql`
  query {
    allInstaNode(limit: 6, sort: { order: DESC, fields: timestamp }) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fluid(
                maxWidth: 800
                maxHeight: 800
                quality: 90
                cropFocus: CENTER
                fit: COVER
              ) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const InstagramBlock = ({ item }) => {
  const data = useStaticQuery(INSTAGRAM_QUERY)
  const instagram = data.allInstaNode.edges
  const baseUrl = `https://www.instagram.com/p`

  return (
    <>
      {item.customFields.toggleInstagram ? (
        <div className="instagram__block">
          <Row>
            {instagram.map((post, i) => (
              <Col lg={4} md={4} sm={6} key={i}>
                <a
                  href={`${baseUrl}/${post.node.id}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  key={i}
                  aria-label="Instagram Image"
                >
                  <Img
                    className="image"
                    fluid={post.node.localFile.childImageSharp.fluid}
                  />
                </a>
              </Col>
            ))}
          </Row>
        </div>
      ) : null}
    </>
  )
}

export default InstagramBlock
