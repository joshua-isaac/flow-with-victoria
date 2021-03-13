// import React from "react"
// import { graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import "./InstagramBlock.scss"

// const INSTAGRAM_QUERY = graphql`
//   query {
//     allInstaNode(limit: 6, sort: { order: DESC, fields: timestamp }) {
//       edges {
//         node {
//           id
//           localFile {
//             childImageSharp {
//               fluid(maxWidth: 400, maxHeight: 400, quality: 90) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const InstagramBlock = ({ item }) => {
//   const data = useStaticQuery(INSTAGRAM_QUERY)
//   const instagram = data.allInstaNode.edges
//   const baseUrl = `https://www.instagram.com/p`
//   const sliderSettings = {
//     autoplay: true,
//     autoplaySpeed: 2500,
//     arrows: false,
//     dots: false,
//     infinite: true,
//     slidesToShow: 3,
//     responsive: [
//       {
//         breakpoint: 769,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   }

//   return (
//     <>
//       {item.customFields.toggleInstagram ? (
//         <div className="instagram__block">
//           <Slider {...sliderSettings}>
//             {instagram.map((post, i) => (
//               <a
//                 href={`${baseUrl}/${post.node.id}`}
//                 target="_blank"
//                 rel="noreferrer noopener"
//                 key={i}
//                 aria-label="Instagram Image"
//               >
//                 <Img
//                   className="image"
//                   fluid={post.node.localFile.childImageSharp.fluid}
//                 />
//               </a>
//             ))}
//           </Slider>
//           {/* <Row>
//             {instagram.map((post, i) => (
//               <Col lg={4} md={4} sm={6} key={i}>
//                 <a
//                   href={`${baseUrl}/${post.node.id}`}
//                   target="_blank"
//                   rel="noreferrer noopener"
//                   key={i}
//                   aria-label="Instagram Image"
//                 >
//                   <Img
//                     className="image"
//                     fluid={post.node.localFile.childImageSharp.fluid}
//                   />
//                 </a>
//               </Col>
//             ))}
//           </Row> */}
//         </div>
//       ) : null}
//     </>
//   )
// }

// export default InstagramBlock
