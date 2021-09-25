import React from "react"
import useSWR from "swr"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./GalleryBlock.scss"
import { AgilityImage } from "@agility/gatsby-image-agilitycms"
import { CgArrowLongRight, CgArrowLongLeft } from "react-icons/cg"

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
    // autoplay: true,
    // autoplaySpeed: 2500,
    // arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  function NextArrow(props) {
    const { onClick } = props
    return (
      <div onClick={onClick} className="next-arrow">
        <CgArrowLongRight />
      </div>
    )
  }

  function PrevArrow(props) {
    const { onClick } = props
    return (
      <div onClick={onClick} className="prev-arrow">
        <CgArrowLongLeft />
      </div>
    )
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
              layout="constrained"
              key={i}
              width="600"
              height="600"
            />
          )
        })}
      </Slider>
    </div>
  )
}

export default GalleryBlock
