// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import "./Services.scss"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import { renderHTML } from "../agility/utils"

// const SERVICES_QUERY = graphql`
//   query {
//     allAgilityServices(
//       filter: { properties: { referenceName: { eq: "services" } } }
//     ) {
//       edges {
//         node {
//           customFields {
//             title
//             icon {
//               label
//               url
//             }
//             description
//           }
//         }
//       }
//     }
//   }
// `

// const Slide = ({ title, icon, description }) => {
//   return (
//     <div className="slider__slide">
//       <div className="slide__title">
//         <img src={icon.url} alt={icon.label} />
//         <h5>{title}</h5>
//       </div>
//       <p>{description}</p>
//     </div>
//   )
// }

// const Services = ({ item }) => {
//   const SliderSettings = {
//     dots: false,
//     arrows: false,
//     slidesToShow: 2,
//     autoplay: true,
//     autoplaySpeed: 4500,
//     responsive: [
//       {
//         breakpoint: 769,
//         settings: {
//           slidesToShow: 1,
//           adaptiveHeight: true,
//         },
//       },
//     ],
//   }
//   const data = useStaticQuery(SERVICES_QUERY)
//   const services = data.allAgilityServices.edges
//   return (
//     <>
//       <a className="servicesAnchor" id="services" href="#/"> </a>
//       <div className="services__slider">
//         <h3>{item.customFields.title}</h3>
//         <Slider {...SliderSettings}>
//           {services.map((service, i) => {
//             const { title, icon, description } = service.node.customFields
//             return (
//               <Slide
//                 key={i}
//                 title={title}
//                 icon={icon}
//                 description={description}
//               />
//             )
//           })}
//         </Slider>
//         <div className="services__content">
//           <div
//             dangerouslySetInnerHTML={renderHTML(
//               item.customFields.participationPrice
//             )}
//           ></div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Services
