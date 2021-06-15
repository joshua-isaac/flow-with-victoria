import React from "react"
import { Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import "./Hero.scss"

const Hero = ({ item }) => {
  const { customFields } = item
  const { image, title, text, button } = customFields

  // function to check whether or not the url is absolute
  const isUrlAbsolute = url => url.indexOf("://") > 0 || url.indexOf("//") === 0

  // function to generate proper link
  const generateLink = (url, target, text) => {
    // if relative link, use Gatsby Link
    if (isUrlAbsolute(url) === false) {
      return (
        <Link to={url} title={text} target={target}>
          {text}
        </Link>
      )
    } else {
      // else use anchor tag
      return (
        <a href={url} title={text} target={target}>
          {text}
        </a>
      )
    }
  }

  return (
    <div className="home__hero">
      <div className="hero__content">
        <Row>
          <Col lg={6}>
            <div className="hero__text">
              <h1 className="hero__title">{title}</h1>
              <p className="hero__subText">{text}</p>
              <div className="hero__link">
                {button &&
                  generateLink(button.href, button.target, button.text)}
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
