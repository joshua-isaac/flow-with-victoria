import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Row, Col } from "react-bootstrap"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"

import "./ImageBlock.scss"

const IMAGE_BLOCK_QUERY = graphql`
  query {
    agilityImageBlock {
      customFields {
        image1 {
          url
          label
        }
        image2 {
          label
          url
        }
      }
    }
  }
`

const ImageBlock = () => {
  const data = useStaticQuery(IMAGE_BLOCK_QUERY)
  const { image1, image2 } = data.agilityImageBlock.customFields
  return (
    <div className="image__block">
      <Row>
        <Col lg={6} md={6} sm={6}>
          <div className="image1">
            <AgilityImage image={image1} width={1000} height={1000} />
          </div>
        </Col>
        <Col lg={6} md={6} sm={6}>
          <div className="image2">
            <AgilityImage image={image2} width={1000} height={1000} />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ImageBlock
