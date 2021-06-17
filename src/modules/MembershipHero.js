import React from "react"
import { Row, Col } from "react-bootstrap"
import "./Hero.scss"

const MembershipHero = ({ item }) => {
  const { customFields } = item

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
                    data-item-id={membershipPlan.customFields.productID}
                    data-item-name={membershipPlan.customFields.title}
                    data-item-price={
                      membershipPlan.customFields.weeklyPlanPrice
                    }
                    data-item-description={
                      membershipPlan.customFields.description
                    }
                    data-item-selected-plan={`${membershipPlan.customFields.productID}-monthly`}
                    data-item-url="/classes"
                    data-item-image={membershipPlan.customFields.image.url}
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
                    Sign Up For Membership
                  </button>
                )}
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero__image">
              <img src={image.url} alt={image.label} width="300" height="300" />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MembershipHero
