import React from "react"
import { Link } from "gatsby"
import "./TextWithButtonBlock.scss"

const TextWithButtonBlock = ({ item }) => {
  const { customFields } = item
  return (
    <div className="text__with__button__block">
      <h3>{customFields.title}</h3>
      <p>{customFields.text}</p>
      <Link to={customFields.button.href} title={customFields.button.text}>
        {customFields.button.text}
      </Link>
    </div>
  )
}

export default TextWithButtonBlock
