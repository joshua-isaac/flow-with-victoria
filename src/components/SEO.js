import React from "react"
import { Helmet } from "react-helmet"
import ogImage from "../img/og-img.png"

const SEO = ({ title, description }) => {
  return (
    <Helmet
      title={`${title} | Flow With Victoria`}
      htmlAttributes={{
        lang: "en",
      }}
      meta={[
        {
          name: `description`,
          content: `Certified Yoga & Barre Instructor based in Toronto helping you find peace, love and gratitude through every session.`,
        },
        {
          name: "keywords",
          content: [
            "Yoga, Barre, Yoga Instructor, Gentle Hatha, Restorative, Yoga Party, Corporate Yoga, Private Yoga Sessions, Zoom Yoga Sessions,  Vinyasa Flow, Hatha, Toronto, Vaughan, Peace, Love, Gratitude",
          ],
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: `Certified Yoga & Barre Instructor based in Toronto helping you find peace, love and gratitude through every session.`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: `@flowwithvictoria`,
        },
        {
          name: `twitter:title`,
          content: `${title} | Flow With Victoria`,
        },
        {
          name: `twitter:description`,
          content: `Certified Yoga & Barre Instructor based in Toronto helping you find peace, love and gratitude through every session.`,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `twitter:image`,
          content: ogImage,
        },
        {
          property: `image`,
          content: ogImage,
        },
      ]}
    />
  )
}

export default SEO
