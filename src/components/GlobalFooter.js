import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./GlobalFooter.scss"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

const FOOTER_QUERY = graphql`
  query {
    agilityGlobalFooter {
      customFields {
        facebookLink {
          href
          target
          text
        }
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
    facebookLink,
    youtubeLink,
    instagramLink,
    text,
    image,
  } = data.agilityGlobalFooter.customFields
  return (
    <footer className="footer">
      <img src={image.url} alt="Flower" />
      <h3>{text}</h3>
      <ul>
        <li>
          <a
            href={instagramLink.href}
            target={instagramLink.target}
            title={instagramLink.text}
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href={youtubeLink.href}
            target={youtubeLink.target}
            title={youtubeLink.text}
          >
            <FaYoutube />
          </a>
        </li>
      </ul>
      <p className="copyright">© {year} Copyright Flow With Victoria.</p>
      <p className="credits">
        Website By {""}
        <a
          href="https://www.joshuaisaac.ca"
          title="Toronto Web Design"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joshua Isaac
        </a>
      </p>
    </footer>
  )
}

export default GlobalFooter
