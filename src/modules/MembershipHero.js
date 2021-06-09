import React, { useContext } from "react"
import { Row, Col } from "react-bootstrap"
import "./Hero.scss"
import { SnipcartContext } from "gatsby-plugin-snipcart-advanced/context"

const MembershipHero = ({ item }) => {
  const { customFields } = item

  const { state } = useContext(SnipcartContext)
  console.log(state)

  const { image, title, text, membershipPlan } = customFields

  return (
    <div className="home__hero">
      <div className="hero__content">
        <Row>
          <Col lg={6}>
            <div className="hero__text">
              <h1 className="hero__title">{title}</h1>
              <p className="hero__subText">{text}</p>
              <div className="hero__link">
                {membershipPlan && (
                  <button
                    // Snipcart Default Button Config
                    className="snipcart-add-item"
                    data-item-id={membershipPlan.customFields.name}
                    data-item-name={membershipPlan.customFields.name}
                    data-item-image={membershipPlan.customFields?.image.url}
                    data-item-price={
                      membershipPlan.customFields.monthlyPlanPrice
                    }
                    data-item-url="/classes"
                    data-item-description={
                      membershipPlan.customFields.description
                    }
                    data-item-selected-plan="weekly-plan"
                    // Weekly Plan
                    data-plan1-id="weekly-plan"
                    data-plan1-name="Weekly"
                    data-plan1-frequency="weekly"
                    data-plan1-interval={
                      membershipPlan.customFields.weeklyPlanInterval
                    }
                    data-item-plan1-price={
                      membershipPlan.customFields.weeklyPlanPrice
                    }
                    // Monthly Plan
                    data-plan2-id="monthly-plan"
                    data-plan2-name="Monthly"
                    data-plan2-frequency="monthly"
                    data-plan2-interval={
                      membershipPlan.customFields.monthlyPlanInterval
                    }
                    data-item-plan2-price={
                      membershipPlan.customFields.monthlyPlanPrice
                    }
                  >
                    Sign Up For Membership
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero__image">
              <img src={image.url} alt={image.label} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MembershipHero
