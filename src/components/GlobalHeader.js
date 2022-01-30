import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "./GlobalHeader.scss"
import { FiMenu } from "react-icons/fi"
import { FaUserAlt } from "react-icons/fa"
import { CgClose } from "react-icons/cg"

import { motion, AnimatePresence } from "framer-motion"

const GlobalHeader = () => {
  // query for menu items
  const menu = useStaticQuery(graphql`
    query {
      allAgilitySitemapNode(filter: { visible: { menu: { eq: true } } }) {
        nodes {
          title
          path
          isFolder
          menuText
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

  // add sticky header
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

  // menu open
  const [isOpen, setIsOpen] = useState(false)

  // dropdown menu open
  const [dropDownOpen, setDropDownOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header" id="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/" title="Flow With Victoria">
            <h1>
              FLOW<span>WITH</span>VICTORIA
            </h1>
          </Link>
        </div>
        <div className="header__menu">
          <ul>
            {menuItems.map((menuItem, i) => {
              if (menuItem.isFolder === true) {
                return (
                  <li
                    key={i}
                    activeClassName="active"
                    className="dropdown-link"
                  >
                    {menuItem.menuText}
                    <ul className="dropdown">
                      <li>
                        <a href={`${menuItem.path}/schedule`}>Schedule</a>
                      </li>
                      <li>
                        <a href={`${menuItem.path}/pricing`}>Pricing</a>
                      </li>
                      <li>
                        <a href={`${menuItem.path}/private-sessions`}>
                          Private Sessions
                        </a>
                      </li>
                    </ul>
                  </li>
                )
              }
              return (
                <li key={i}>
                  <Link
                    to={menuItem.path}
                    activeClassName="active"
                    title={menuItem.title}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <ul className="header__mobile">
          <li className="mobile-account">
            <Link to="/account">
              <FaUserAlt />
            </Link>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="header__mobileMenu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <div className="header__container">
              <div className="header__logo">
                <Link to="/" title="Flow With Victoria">
                  <h1>
                    FLOW<span>WITH</span>VICTORIA
                  </h1>
                </Link>
              </div>
              <ul className="header__mobile">
                <li className="mobile-account">
                  <Link to="/account">
                    <FaUserAlt />
                  </Link>
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
            <ul>
              {menuItems.map((menuItem, i) => {
                if (menuItem.isFolder === true) {
                  return (
                    <li
                      key={i}
                      activeClassName="active"
                      className="dropdown-link"
                      onClick={() => {
                        setDropDownOpen(!dropDownOpen)
                      }}
                    >
                      {menuItem.menuText}
                      {dropDownOpen && (
                        <ul className="dropdown">
                          <li>
                            <a href={`${menuItem.path}/schedule`}>Schedule</a>
                          </li>
                          <li>
                            <a href={`${menuItem.path}/pricing`}>Pricing</a>
                          </li>
                          <li>
                            <a href={`${menuItem.path}/private-sessions`}>
                              Private Sessions
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                  )
                }
                return (
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
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default GlobalHeader
