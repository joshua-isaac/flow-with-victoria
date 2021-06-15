import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./GlobalHeader.scss"
import { FiMenu } from "react-icons/fi"
import { FaShoppingBag, FaUserAlt } from "react-icons/fa"
import { BiShoppingBag } from "react-icons/bi"
import { CgClose } from "react-icons/cg"

const GlobalHeader = ({ header }) => {
  // query for menu items
  const menu = useStaticQuery(graphql`
    query {
      allAgilitySitemapNode(filter: { visible: { menu: { eq: true } } }) {
        nodes {
          title
          path
          visible {
            menu
          }
        }
      }
    }
  `)

  const menuItems = menu.allAgilitySitemapNode.nodes

  // functions that help with menu
  typeof window !== "undefined" &&
    window.addEventListener("resize", function(event) {
      var w = document.documentElement.clientWidth
      // Display result inside a div element
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
            {menuItems.map((menuItem, i) => (
              <li key={i}>
                <Link
                  to={menuItem.path}
                  activeClassName="active"
                  title={menuItem.title}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
            <li>
              <button className="snipcart-customer-signin" name="login">
                <FaUserAlt />
              </button>
            </li>
            <li>
              <button className="snipcart-checkout" name="checkout">
                <FaShoppingBag />
              </button>
            </li>
          </ul>
        </div>
        <ul className="header__mobile">
          <li>
            <button className="snipcart-checkout" name="checkout">
              <BiShoppingBag />
            </button>
          </li>
          <li>
            <button
              className="header__mobile-toggle"
              onClick={handleOpen}
              onKeyDown={handleOpen}
            >
              {isOpen ? <CgClose /> : <FiMenu />}
            </button>
          </li>
        </ul>
      </div>
      <div className="header__mobileMenu" style={mobileMenuStyle}>
        <ul>
          {menuItems.map((menuItem, i) => (
            <li key={i}>
              <Link
                to={menuItem.path}
                onClick={handleOpen}
                onKeyDown={handleOpen}
                title={menuItem.title}
              >
                {menuItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default GlobalHeader
