import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./Testimonials.scss"

const TESTIMONIALS_QUERY = graphql`
  query {
    allAgilityTestimonials(
      filter: { properties: { referenceName: { eq: "testimonials" } } }
    ) {
      edges {
        node {
          customFields {
            name
            text
          }
        }
      }
    }
  }
`

const Slide = ({ name, text }) => {
  return (
    <div className="slider__slide">
      <p className="text">"{text}"</p>
      <p className="name">{name}</p>
    </div>
  )
}

const Testimonials = () => {
  const data = useStaticQuery(TESTIMONIALS_QUERY)
  const testimonials = data.allAgilityTestimonials.edges
  const SliderSettings = {
    dots: false,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  }
  return (
    <div className="testimonials__block">
      <Slider {...SliderSettings}>
        {testimonials.map((testimonial, i) => {
          const { name, text, imageLocalImg } = testimonial.node.customFields
          return <Slide key={i} name={name} text={text} image={imageLocalImg} />
        })}
      </Slider>
    </div>
  )
}

export default Testimonials
