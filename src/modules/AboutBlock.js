import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "react-bootstrap"
import { renderHTML } from "../agility/utils"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"
import "./AboutBlock.scss"

const ABOUT_QUERY = graphql`
  query {
    agilityAboutBlock {
      customFields {
        image {
          label
          url
        }
        aboutText
        aboutTitle
      }
    }
  }
`

const AboutBlock = () => {
  const data = useStaticQuery(ABOUT_QUERY)
  const { aboutTitle, aboutText, image } = data.agilityAboutBlock.customFields
  return (
    <>
      <a className="aboutAnchor" id="about" href="#/"> </a>
      <div className="about__block">
        <Row>
          <Col lg={4} md={4}>
            <div className="about__image">
              <AgilityImage image={image} width={500} height={500} />
            </div>
          </Col>
          <Col lg={8} md={8}>
            <div className="about__content">
              <h3>{aboutTitle}</h3>
              <div dangerouslySetInnerHTML={renderHTML(aboutText)}></div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default AboutBlock
