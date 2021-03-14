import React, { useState } from "react"
import { Link } from "gatsby"
import "./GlobalHeader.scss"
import { HiMenu } from "react-icons/hi"
import { CgClose } from "react-icons/cg"

const GlobalHeader = () => {
  typeof window !== "undefined" &&
    window.addEventListener("resize", function(event) {
      var w = document.documentElement.clientWidth
      // Display result inside a div element
      console.log(w)
      if (w >= 991) {
        setIsOpen(false)
      }
    })
  typeof window !== "undefined" &&
    window.addEventListener("scroll", function(event) {
      var scroll = this.scrollY
      const header = document.getElementById("header")
      if (scroll >= 50) {
        header.classList.add("sticky")
      } else {
        header.classList.remove("sticky")
      }
    })

  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const mobileMenuStyle = {
    overflow: "hidden",
    height: isOpen ? 275 : 0,
    transition: "0.3s",
  }

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
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#services">Services</a>
            </li>
            <li>
              <a href="/videos">Videos</a>
            </li>
            <li className="book__btn">
              <a href="/#book">Book</a>
            </li>
          </ul>
        </div>
        <button
          className="header__mobile-toggle"
          onClick={handleOpen}
          onKeyDown={handleOpen}
        >
          {isOpen ? <CgClose /> : <HiMenu />}
        </button>
      </div>
      <div className="header__mobileMenu" style={mobileMenuStyle}>
        <ul>
          <li>
            <a href="/#home" onClick={handleOpen} onKeyDown={handleOpen}>
              Home
            </a>
          </li>
          <li>
            <a href="/#about" onClick={handleOpen} onKeyDown={handleOpen}>
              About
            </a>
          </li>
          <li>
            <a href="/#services" onClick={handleOpen} onKeyDown={handleOpen}>
              Services
            </a>
          </li>
          <li>
            <a href="/videos" onClick={handleOpen} onKeyDown={handleOpen}>
              Videos
            </a>
          </li>
          <li className="book__btn">
            <a href="/#book" onClick={handleOpen} onKeyDown={handleOpen}>
              Book
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default GlobalHeader
