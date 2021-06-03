import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { format } from "date-fns"
import "./ClassesBlock.scss"

const ClassesBlock = props => {
  // query for classes data
  const data = useStaticQuery(graphql`
    query {
      Schedule: allAgilityScheduleItem(
        sort: { order: ASC, fields: customFields___date }
      ) {
        nodes {
          customFields {
            title
            price
            duration
            description
            date
            image {
              url
            }
          }
        }
      }
      Packages: allAgilityPackageItem {
        nodes {
          customFields {
            title
            price
            description
          }
        }
      }
      OneOnOne: allAgilityOneonOneItem {
        nodes {
          customFields {
            title
            price
            description
          }
        }
      }
    }
  `)

  // get class types
  const schedule = data.Schedule
  const packages = data.Packages
  const oneonone = data.OneOnOne

  // put class types in array
  const tabContent = [
    {
      type: "Schedule",
      content: schedule,
    },
    {
      type: "Packages",
      content: packages,
    },
    {
      type: "One-on-One",
      content: oneonone,
    },
  ]

  // set active class type
  const [active, setActive] = useState(tabContent[0])

  // handle changing tab
  const handleClick = newTab => {
    setActive(newTab)
  }

  console.log(active)

  return (
    <div className="classes_tabs">
      <div className="tab__buttons">
        {tabContent.map((tab, i) => (
          <button
            key={tab.type}
            className={tab.type === active.type ? "active" : ""}
            onClick={() => handleClick(tab)}
          >
            {tab.type}
          </button>
        ))}
      </div>
      <div className="tab__content">
        {tabContent.map((tab, i) => {
          if (tab.type === active.type) {
            // schedule tab type
            if (active.type === "Schedule") {
              return (
                <div key={tab.type} className="schedule__tab">
                  <h1>{active.type}</h1>
                  {active.content.nodes.map((node, i) => {
                    console.log(node)
                    return (
                      <div className="schedule__tab-item" key={i}>
                        <h4 className="schedule__tab-date">
                          {format(new Date(node.customFields.date), "PPPPp")}
                        </h4>
                        <p className="schedule__tab-title">
                          {node.customFields.title} -{" "}
                          {node.customFields.duration} min
                        </p>
                        <p className="schedule__tab-description">
                          {node.customFields.description}
                        </p>
                        <button
                          className="snipcart-add-item"
                          data-item-id={node.customFields.title}
                          data-item-price={node.customFields.price}
                          data-item-url="/classes"
                          data-item-description={node.customFields.description}
                          data-item-image={node.customFields?.image?.url}
                          data-item-name={node.customFields.title}
                        >
                          Sign Up
                        </button>
                      </div>
                    )
                  })}
                </div>
              )
            } else {
              // packages & one-on-one type
              return (
                <div key={tab.type} className="other__tab">
                  <h1>{active.type}</h1>
                  {active.content.nodes.map((node, i) => {
                    return (
                      <div className="other__tab-item" key={i}>
                        <h4 className="other__tab-title">
                          {node.customFields.title}
                        </h4>
                        <p className="other__tab-price">
                          ${node.customFields.price}
                        </p>
                        <p className="other__tab-description">
                          {node.customFields.description}
                        </p>
                        <button
                          className="snipcart-add-item"
                          data-item-id={node.customFields.title}
                          data-item-price={node.customFields.price}
                          data-item-url="/classes"
                          data-item-description={node.customFields.description}
                          // data-item-image={node.customFields?.image?.url}
                          data-item-name={node.customFields.title}
                        >
                          Sign Up
                        </button>
                      </div>
                    )
                  })}
                </div>
              )
            }
          }
        })}
      </div>
    </div>
  )
}

export default ClassesBlock
