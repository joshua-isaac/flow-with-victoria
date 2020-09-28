import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Row, Col } from "react-bootstrap"
import Img from "gatsby-image"
import "./ImageBlock.scss"

const IMAGE_BLOCK_QUERY = graphql`
  query {
    agilityImageBlock {
      customFields {
        image1LocalImg {
          childImageSharp {
            fluid(quality: 90, maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2LocalImg {
          childImageSharp {
            fluid(quality: 90, maxWidth: 800, maxHeight: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const ImageBlock = () => {
  const data = useStaticQuery(IMAGE_BLOCK_QUERY)
  const { image1LocalImg, image2LocalImg } = data.agilityImageBlock.customFields
  return (
    <div className="image__block">
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div className="image1">
            <Img
              className="image"
              fluid={image1LocalImg.childImageSharp.fluid}
              alt="Yoga Pose"
            />
          </div>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div className="image2">
            <Img
              className="image"
              alt="Yoga Pose"
              fluid={image2LocalImg.childImageSharp.fluid}
            />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ImageBlock
