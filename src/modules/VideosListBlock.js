import React, { useState } from "react"
import useSWR from "swr"
import YouTube from "@u-wave/react-youtube"
import "./YoutubeListBlock.scss"

const VideosListBlock = ({ item }) => {
  // get module fields
  const { customFields } = item

  // fetcher for swr
  const fetcher = url =>
    fetch(url, {
      headers: {
        Accept: "application/json",
      },
    }).then(res => res.json())

  // using swr to cache our fetch
  const { data, error } = useSWR(
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUEFrgB5iuANCVX4GZLxJNzg&key=${process.env.GATSBY_YOUTUBE_API_KEY}`,
    fetcher
  )

  // set up visible videos
  const [visible, setVisible] = useState(parseInt(customFields.videosToShow))

  // function to show more videos
  const showMoreVideos = () => {
    setVisible(prevValue => prevValue + parseInt(customFields.videosToLoad))
  }

  // error loading videos
  if (error) {
    return <p>there was an error....</p>
  }

  // loading gallery
  if (!data) {
    return <p>loading videos...</p>
  }

  let videos

  if (data) {
    videos = data.items.map(video => {
      return {
        title: video.snippet.title,
        id: video.snippet.resourceId.videoId,
        thumbnail: video.snippet.thumbnails.standard,
      }
    })
  }

  // return clean object for videos
  // const videos = data.items.map(video => {
  //   return {
  //     title: video.snippet.title,
  //     id: video.snippet.resourceId.videoId,
  //     thumbnail: video.snippet.thumbnails.standard,
  //   }
  // })

  return (
    <div className="youtube-list__block">
      {videos.slice(0, visible).map(video => (
        <div key={video.id}>
          <YouTube video={video.id} width="100%" height="600px" />
        </div>
      ))}
      <div className="youtube-list__buttons">
        {videos.length > visible ? (
          <button onClick={showMoreVideos}>Load More Videos</button>
        ) : (
          <a
            href={customFields.youTubeChannelLink.href}
            target={customFields.youTubeChannelLink.target}
          >
            {customFields.youTubeChannelLink.text}
          </a>
        )}
      </div>
    </div>
  )
}

export default VideosListBlock
