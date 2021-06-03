import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./GalleryBlock.scss"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"

const GalleryBlock = () => {
  const data = useStaticQuery(graphql`
    query {
      allAgilityGalleryBlock(filter: { contentID: { eq: 69 } }) {
        nodes {
          linkedContent_gallery {
            customFields {
              image {
                url
              }
            }
          }
        }
      }
    }
  `)

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <div className="gallery__block">
      <Slider {...sliderSettings}>
        {data.allAgilityGalleryBlock.nodes[0].linkedContent_gallery.map(
          (image, i) => {
            return (
              <AgilityImage
                image={image.customFields.image}
                layout="fullWidth"
                key={i}
              />
            )
          }
        )}
      </Slider>
    </div>
  )
}

export default GalleryBlock
