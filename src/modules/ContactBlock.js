import React from "react"
import { Row, Col, Form } from "react-bootstrap"
import { graphql, useStaticQuery } from 'gatsby'
import "./ContactBlock.scss"

const SERVICES_QUERY = graphql`
  query {
    allAgilityServices(
      filter: { properties: { referenceName: { eq: "services" } } }
    ) {
      edges {
        node {
          customFields {
            title
            icon {
              label
              url
            }
            description
          }
        }
      }
    }
  }
`

const ContactBlock = ({ item }) => {
  const { image, title } = item.customFields
  const data = useStaticQuery(SERVICES_QUERY);
  const services = data.allAgilityServices.edges;
  return (
    <>
      <a className="anchor" id="book" href="#/"> </a>
      <div className="contact__block">
        <Row>
          <Col lg={6}>
            <div className="contact__image">
              <img src={image.url} alt={image.label} />
            </div>
          </Col>
          <Col lg={6}>
            <div className="contact__form">
              <h3>{title}</h3>
              <form
                name="contact"
                method="post"
                data-netlify-honeypot="botfield"
                data-netlify="true"
                action="/thank-you"
              >
                <input type="hidden" name="form-name" value="contact" />
                <Form.Group as={Row}>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="mb"
                    />
                  </Col>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="phone"
                      name="phone"
                      placeholder="Phone"
                      required
                      className="mb"
                    />
                  </Col>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col lg={12}>
                    <Form.Control as="select" name="interest">
                      <option default>I'm Interested In...</option>
                      {services.map((service, i) => (
                        <option name="question" value={`${service.node.customFields.title}`} key={i}>
                          {service.node.customFields.title}
                        </option>
                      ))}
                      <option name="question" value="Question">
                        Asking a question
                      </option>
                    </Form.Control>
                  </Col>
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    as="textarea"
                    rows="2"
                    name="message"
                    placeholder="Message..."
                  />
                </Form.Group>
                <button className="contact__form-btn">Submit</button>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ContactBlock
