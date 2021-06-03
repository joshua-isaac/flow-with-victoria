import React from "react"
import { Row, Col, Form } from "react-bootstrap"
import "./ContactForm.scss"

const ContactForm = ({ item }) => {
  const { title } = item.customFields
  return (
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
            <Form.Control as="select" name="interest" required>
              <option default>I'm Interested In...</option>
              <option name="schedule" value="Schedule">
                Scheduled Classes
              </option>
              <option name="schedule" value="Schedule">
                Packages
              </option>
              <option name="schedule" value="Schedule">
                One-on-One Classes
              </option>
              <option name="schedule" value="Schedule">
                Membership Plans
              </option>
              <option name="question" value="Question">
                General Inquiry
              </option>
            </Form.Control>
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            rows="4"
            name="message"
            placeholder="Message..."
            required
          />
        </Form.Group>
        <button className="contact__form-btn">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
