// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import { Row, Col } from "react-bootstrap"
// import ServiceCard from "../components/ServiceCard"
// import "./ServicesListing.scss"

// const ServicesListing = ({ item }) => {
//   const { customFields } = item
//   // query for services
//   const data = useStaticQuery(graphql`
//     query {
//       allAgilityServices {
//         nodes {
//           customFields {
//             title
//             description
//             image {
//               url
//               label
//             }
//           }
//         }
//       }
//     }
//   `)

//   const services = data.allAgilityServices.nodes

//   return (
//     <section className="services__listing">
//       {/* <h3>{customFields.title}</h3> */}
//       <Row>
//         {services.map((service, i) => (
//           <Col lg={6} md={6} sm={12} key={i}>
//             <ServiceCard
//               key={i}
//               title={service.customFields.title}
//               image={service.customFields.image}
//               description={service.customFields.description}
//             />
//           </Col>
//         ))}
//       </Row>
//     </section>
//   )
// }

// export default ServicesListing
