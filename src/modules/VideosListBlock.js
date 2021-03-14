import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import "./YoutubeListBlock.scss"

const VideosListBlock = () => {
  const data = useStaticQuery(graphql`
  query {
    agilityVideosListBlock(contentID: {eq: 77}) {
      linkedContent_videoList {
        customFields {
          title
          videoID
        }
      }
    }
  }
  `)

  const { linkedContent_videoList: videos } = data.agilityVideosListBlock

  return (
    <div className="youtube-list__block">
      {videos.map((video, index) => (
        <iframe title={video.customFields.title} key={index} width="560" height="315" src={`https://www.youtube.com/embed/${video.customFields.videoID}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
      ))}
    </div>
  )
}

export default VideosListBlock
