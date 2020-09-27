import React, { Component } from "react"
import { Link } from "gatsby"
import "./GlobalHeader.scss"

const GlobalHeader = () => {
  // check for window object
  typeof window !== "undefined" &&
    // function for sticky header
    window.addEventListener("scroll", function(event) {
      var scroll = this.scrollY
      const header = document.getElementById("header")
      if (scroll >= 50) {
        header.classList.add("sticky")
      } else {
        header.classList.remove("sticky")
      }
    })
  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <h1>
              FLOW<span>WITH</span>VICTORIA
            </h1>
          </Link>
        </div>
        <div className="header__menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#videos">Videos</a>
            </li>
            <li className="book__btn">
              <a href="#book">Book</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default GlobalHeader
