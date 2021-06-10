import React, { useEffect, useState } from "react"
import { format } from "date-fns"

const ScheduleTabItem = ({ item }) => {
  // set up availability
  const [available, setAvailable] = useState(true)

  console.log(available)

  // set up snipcart secret key
  const secret = process.env.GATSBY_SNIPCART_SECRET_API_KEY

  // useEffect to call function on component mount
  useEffect(() => {
    try {
      // get product data function
      const getData = async () => {
        const request = await fetch(
          `https://app.snipcart.com/api/products/${item.customFields.productID}`,
          {
            headers: {
              Authorization: `Basic ${btoa(secret)}`,
              Accept: "application/json",
            },
          }
        )

        const result = await request.json()

        if (result.totalStock <= 0) {
          setAvailable(false)
        }
      }
      // invoke function
      getData()
    } catch (e) {
      return
    }
  }, [])

  return (
    <div className="schedule__tab-item">
      <h4 className="schedule__tab-date">
        {format(new Date(item.customFields.date), "PPPPp")}
      </h4>
      <p className="schedule__tab-title">
        {item.customFields.title} - {item.customFields.duration} min
      </p>
      <p className="schedule__tab-description">
        {item.customFields.description}
      </p>
      <button
        className="snipcart-add-item"
        data-item-id={item.customFields.productID}
        data-item-price={item.customFields.price}
        data-item-url="/classes"
        data-item-description={item.customFields.description}
        data-item-image={item.customFields?.image?.url}
        data-item-name={item.customFields.title}
      >
        Sign Up
      </button>
    </div>
  )
}

export default ScheduleTabItem
