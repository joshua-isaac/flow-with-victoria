import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Row, Col } from "react-bootstrap"
import { renderHTML } from "../agility/utils"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import "./AboutBlock.scss"

const ABOUT_QUERY = graphql`
  query {
    agilityAboutBlock {
      customFields {
        imageLocalImg {
          childImageSharp {
            fluid(quality: 90, maxWidth: 350, maxHeight: 350) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutText
        aboutTitle
      }
    }
  }
`

const AboutBlock = () => {
  const data = useStaticQuery(ABOUT_QUERY)
  const {
    aboutTitle,
    aboutText,
    imageLocalImg,
  } = data.agilityAboutBlock.customFields
  return (
    <>
      <a className="anchor" id="about"></a>
      <div className="about__block">
        <Row>
          <Col lg={4} md={4}>
            <div className="about__image">
              <Img
                className="image"
                fluid={imageLocalImg.childImageSharp.fluid}
              />
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
