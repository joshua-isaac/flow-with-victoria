import React from "react"
import useSWR from "swr"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./GalleryBlock.scss"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"

const GalleryBlock = ({ item }) => {
  const { customFields } = item

  // fetcher for swr
  const fetcher = url =>
    fetch(url, {
      headers: {
        Accept: "application/json",
        Apikey: `${process.env.GATSBY_AGILITY_API_KEY}`,
      },
    }).then(res => res.json())

  // using swr to cache our fetch
  const { data, error } = useSWR(
    `https://${process.env.GATSBY_AGILITY_GUID}-api.agilitycms.cloud/${process.env.GATSBY_AGILITY_GUID}/fetch/gallery/${customFields.gallery.galleryid}`,
    fetcher
  )

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

  // error fetching gallery
  if (error) {
    return (
      <div className="gallery__error">
        <p>Could not load Gallery...</p>
      </div>
    )
  }

  // // loading gallery
  if (!data) {
    return (
      <div className="gallery__loading">
        <p>Loading gallery, please wait.</p>
      </div>
    )
  }

  return (
    <div className="gallery__block">
      <Slider {...sliderSettings}>
        {data.media.map((image, i) => {
          return (
            <AgilityImage
              image={image}
              layout="fullWidth"
              key={i}
              objectPosition="center"
              objectFit="cover"
            />
          )
        })}
      </Slider>
    </div>
  )
}

export default GalleryBlock
