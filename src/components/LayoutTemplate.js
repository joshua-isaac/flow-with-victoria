import React from "react"
import "./LayoutTemplate.scss"

const Layout = ({ children }) => {
  return (
    <section className="section">
      <div className="main-wrapper">{children}</div>
    </section>
  )
}

export default Layout
