import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Img from "gatsby-image"
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
            imageLocalImg {
              childImageSharp {
                fixed(quality: 90, width: 80, height: 80) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`

const Slide = ({ name, text, image }) => {
  return (
    <div className="slider__slide">
      <Img className="image" fixed={image.childImageSharp.fixed} />
      <p className="text">{text}</p>
      <p className="name">{name}</p>
    </div>
  )
}

const Testimonials = () => {
  const data = useStaticQuery(TESTIMONIALS_QUERY)
  const testimonials = data.allAgilityTestimonials.edges
  const SliderSettings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  }
  return (
    <div className="testimonials__block">
      <Slider {...SliderSettings}>
        {testimonials.map((testimonial, i) => {
          console.log(testimonial)
          const { name, text, imageLocalImg } = testimonial.node.customFields
          return <Slide key={i} name={name} text={text} image={imageLocalImg} />
        })}
      </Slider>
    </div>
  )
}

export default Testimonials
