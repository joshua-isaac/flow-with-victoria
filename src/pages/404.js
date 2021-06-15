import React from "react"
import { Link } from "gatsby"
import Layout from "../components/LayoutTemplate"
import { Row, Col } from "react-bootstrap"
import Image from "../img/yoga_pose.svg"
import GlobalHeader from "../components/GlobalHeader"
import GlobalFooter from "../components/GlobalFooter"
import "./404.scss"

const Error404 = () => {
  return (
    <Layout>
      <GlobalHeader />
      <div className="error404__hero">
        <div className="error404__content">
          <Row>
            <Col lg={6}>
              <div className="error404__text">
                <h1 className="error404__title">Error 404</h1>
                <p className="error404__subText">
                  Oops! It looks like you're lost, or we couldn't find what you
                  were looking for. We're sorry!
                </p>
                <div className="error404__link">
                  <Link to="/">Return Home</Link>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="error404__image">
                <img src={Image} alt="Yoga Pose" width="300" height="300" />
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <GlobalFooter />
    </Layout>
  )
}

export default Error404
