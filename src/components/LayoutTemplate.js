import React from "react"
import "./LayoutTemplate.scss"

export default ({ children }) => {
  return (
    <section className="section">
      <div className="main-wrapper">{children}</div>
    </section>
  )
}
