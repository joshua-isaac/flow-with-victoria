import React from "react"
import { Row, Col } from "react-bootstrap"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"
import { Link } from "gatsby"
import "./ServiceCard.scss"

const ServiceCard = ({ title, image, description }) => {
  return (
    <div className="service__card">
      <Link to="/classes">
        <h5>{title}</h5>
        <p>{description}</p>
        <Link to="/classes" className="service__card-link">
          View Schedule
        </Link>
      </Link>
    </div>
  )
}

export default ServiceCard
