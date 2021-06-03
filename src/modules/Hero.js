import React from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import "./Hero.scss"

const Hero = ({ item }) => {
  const { customFields } = item
  const { image, title, text, button } = customFields
  return (
    <div className="home__hero">
      <div className="hero__content">
        <Row>
          <Col lg={6}>
            <div className="hero__text">
              <h1 className="hero__title">{title}</h1>
              <p className="hero__subText">{text}</p>
              <div className="hero__link">
                {button && (
                  <Link
                    to={button.href}
                    title={button.text}
                    target={button.target}
                  >
                    {button.text}
                  </Link>
                )}
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero__image">
              <img src={image.url} alt={image.label} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Hero
