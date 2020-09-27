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
    <div className="about__block">
      <div className="about__image">
        <Img className="image" fluid={imageLocalImg.childImageSharp.fluid} />
      </div>
      <div className="about__content">
        <h3>{aboutTitle}</h3>
        <div dangerouslySetInnerHTML={renderHTML(aboutText)}></div>
      </div>
      {/* <Row>
        <Col lg={6} md={6}>
          <div className="about__image">
            <BackgroundImage
              className="image"
              fluid={imageLocalImg.childImageSharp.fluid}
            />
          </div>
        </Col>
        <Col lg={6} md={6}>
          <div className="about__content">
            <h3>{aboutTitle}</h3>
            <div dangerouslySetInnerHTML={renderHTML(aboutText)}></div>
          </div>
        </Col>
      </Row> */}
    </div>
  )
}

export default AboutBlock
