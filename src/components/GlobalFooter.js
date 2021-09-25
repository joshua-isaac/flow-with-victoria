import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./GlobalFooter.scss"
import { FaInstagram, FaYoutube } from "react-icons/fa"

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
  var day = new Date()
  var year = day.getFullYear()
  const data = useStaticQuery(FOOTER_QUERY)
  const {
    youtubeLink,
    instagramLink,
    text,
    image,
  } = data.agilityGlobalFooter.customFields
  return (
    <footer className="footer">
      <img src="/assets/flower-logo.svg" alt="Flower" width="80" height="80" />
      <h3>{text}</h3>
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
