import React from "react"
import { Row, Col, Form } from "react-bootstrap"
import "./ContactBlock.scss"

const ContactBlock = ({ item }) => {
  const { image, title } = item.customFields
  return (
    <>
      <a className="anchor" id="book"></a>
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
              >
                <input type="hidden" name="form-name" value="contact" />
                <Form.Group as={Row}>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      className="name-input"
                    />
                  </Col>
                  <Col lg={6} md={6}>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className="name-input"
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
                    <Form.Control as="select">
                      <option default>I'm Interested In...</option>
                      <option name="gentleHatha" value="Gentle Hatha">
                        Gentle Hatha
                      </option>
                      <option name="vinyasaFlowL2" value="Vinyasa Flow L2">
                        Vinyasa Flow L2
                      </option>
                      <option name="hathaL1L2" value="Hatha L1 - L2">
                        Hatha L1 - L2
                      </option>
                      <option name="barre" value="Barre">
                        Barre
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
                <button class="contact__form-btn">Submit</button>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default ContactBlock
