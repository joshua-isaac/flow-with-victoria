import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useForm } from "react-hook-form"
import { FaInstagram, FaYoutube } from "react-icons/fa"
import addToMailchimp from "gatsby-plugin-mailchimp"

import "./GlobalFooter.scss"

const FOOTER_QUERY = graphql`
  query {
    agilityGlobalFooter {
      customFields {
        youtubeLink {
          href
          target
          text
        }
        image {
          url
        }
        instagramLink {
          href
          target
          text
        }
        text
      }
    }
  }
`

const GlobalFooter = () => {
  const [message, setMessage] = useState("")

  var day = new Date()
  var year = day.getFullYear()
  const data = useStaticQuery(FOOTER_QUERY)
  const {
    youtubeLink,
    instagramLink,
    text,
    image,
  } = data.agilityGlobalFooter.customFields

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async ({ email }) => {
    try {
      const result = await addToMailchimp(email)
      setMessage(result.msg)
    } catch (err) {
      setMessage(err)
    }
  }

  return (
    <footer className="footer">
      <img src="/assets/flower-logo.svg" alt="Flower" width="80" height="80" />
      <h3>{text}</h3>
      <p>Subscribe to stay up to date with classes & workshops!</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          className="form-input"
        />
        <button type="submit" className="form-button">
          Sign up
        </button>
      </form>
      {!message && errors.email && (
        <p className="form-error">Email is required</p>
      )}
      <div className="form-success">{message}</div>
      <ul>
        <li>
          <a
            href={instagramLink.href}
            target={instagramLink.target}
            title={instagramLink.text}
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href={youtubeLink.href}
            target={youtubeLink.target}
            title={youtubeLink.text}
            rel="noopener noreferrer"
          >
            <FaYoutube />
          </a>
        </li>
      </ul>
      <p className="copyright">© {year} Copyright Flow With Victoria.</p>
      <p className="credits">
        Website By {""}
        <a
          href="https://www.webdisco.digital"
          title="Toronto Web Design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Disco
        </a>
      </p>
    </footer>
  )
}

export default GlobalFooter
