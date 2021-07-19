import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./ClassesBlock.scss"
import ScheduleTabItem from "../components/ScheduleTabItem"

const ClassesBlock = props => {
  // query for classes data
  const data = useStaticQuery(graphql`
    query {
      Schedule: allAgilityScheduleItem(
        sort: { order: ASC, fields: customFields___date }
        filter: { properties: { referenceName: { eq: "schedule" } } }
      ) {
        nodes {
          customFields {
            title
            productID
            price
            duration
            description
            date
            manageStock
            image {
              url
            }
          }
        }
      }
      membershipPlan: agilityClassesBlock(
        properties: { referenceName: { eq: "classes_classesblock" } }
      ) {
        linkedContent_membership {
          customFields {
            monthlyPlanInterval
            monthlyPlanPrice
            productID
            title
            image {
              url
              label
            }
            description
            weeklyPlanInterval
            weeklyPlanPrice
          }
        }
      }
      Workshops: allAgilityScheduleItem(
        filter: { properties: { referenceName: { eq: "workshops" } } }
      ) {
        nodes {
          customFields {
            title
            productID
            price
            duration
            description
            date
            manageStock
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
            productID
            price
            description
            image {
              url
              label
            }
          }
        }
      }
      OneOnOne: allAgilityOneonOneItem(
        sort: { fields: properties___itemOrder }
      ) {
        nodes {
          customFields {
            title
            productID
            price
            description
            image {
              url
              label
            }
          }
        }
      }
    }
  `)

  // get class types
  const schedule = data.Schedule
  const packages = data.Packages
  const oneonone = data.OneOnOne
  const workshops = data.Workshops

  console.log(workshops)

  // get featured plan
  const membershipPlan = data.membershipPlan.linkedContent_membership

  // put class types in array
  const tabContent = [
    {
      type: "Schedule",
      content: schedule,
    },
    {
      type: "Workshops",
      content: workshops,
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
            // return schedule tab type
            if (active.type === "Schedule") {
              return (
                <div key={tab.type} className="schedule__tab">
                  <h1>{active.type}</h1>
                  {active.content.nodes.map((node, i) => {
                    return <ScheduleTabItem item={node} key={i} />
                  })}
                </div>
              )
            } else if (active.type === "Workshops") {
              return (
                <div key={tab.type} className="schedule__tab">
                  <h1>{active.type}</h1>
                  {active.content.nodes.map((node, i) => {
                    return <ScheduleTabItem item={node} key={i} />
                  })}
                </div>
              )
            } else if (active.type === "Packages") {
              // else return packages tab
              return (
                membershipPlan && (
                  <div key={tab.type} className="other__tab">
                    <h1>{active.type}</h1>
                    <div className="other__tab-item">
                      <h4 className="other__tab-title">
                        {membershipPlan.customFields.title}
                      </h4>
                      <p className="other__tab-price">
                        Weekly & Monthly plans available
                      </p>
                      <p className="other__tab-description">
                        {membershipPlan.customFields.description}
                      </p>
                      <button
                        // Snipcart Default Button Config
                        className="snipcart-add-item"
                        data-item-id={membershipPlan.customFields.productID}
                        data-item-name={membershipPlan.customFields.title}
                        data-item-image={membershipPlan.customFields.image.url}
                        data-item-price={
                          membershipPlan.customFields.weeklyPlanPrice
                        }
                        data-item-url="/classes"
                        data-item-description={
                          membershipPlan.customFields.description
                        }
                        data-item-selected-plan={`${membershipPlan.customFields.productID}-monthly`}
                        // Weekly Plan
                        data-plan1-id={`${membershipPlan.customFields.productID}-weekly`}
                        data-plan1-name={`${membershipPlan.customFields.title} - Weekly`}
                        data-plan1-frequency="weekly"
                        data-plan1-interval={
                          membershipPlan.customFields.weeklyPlanInterval
                        }
                        data-item-plan1-price={
                          membershipPlan.customFields.weeklyPlanPrice
                        }
                        // Monthly Plan
                        data-plan2-id={`${membershipPlan.customFields.productID}-monthly`}
                        data-plan2-name={`${membershipPlan.customFields.title} - Monthly`}
                        data-plan2-frequency="monthly"
                        data-plan2-interval={
                          membershipPlan.customFields.monthlyPlanInterval
                        }
                        data-item-plan2-price={
                          membershipPlan.customFields.monthlyPlanPrice
                        }
                      >
                        Sign Up
                      </button>
                    </div>
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
                            data-item-id={node.customFields.productID}
                            data-item-price={node.customFields.price}
                            data-item-url="/api/products"
                            data-item-description={
                              node.customFields.description
                            }
                            data-item-image={node.customFields.image.url}
                            data-item-name={node.customFields.title}
                          >
                            Sign Up
                          </button>
                        </div>
                      )
                    })}
                  </div>
                )
              )
              // else return one-on-one tab
            } else {
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
                          data-item-id={node.customFields.productID}
                          data-item-price={node.customFields.price}
                          data-item-url="/api/products"
                          data-item-description={node.customFields.description}
                          data-item-image={node.customFields.image.url}
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
