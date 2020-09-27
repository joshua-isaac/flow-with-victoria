import React from "react"
import { renderHTML } from "../agility/utils"
import "./YoutubeBlock.scss"

const YoutubeBlock = ({ item }) => {
  return (
    <div className="youtube__block">
      <div
        dangerouslySetInnerHTML={renderHTML(item.customFields.youtubeEmbed)}
      ></div>
    </div>
  )
}

export default YoutubeBlock
