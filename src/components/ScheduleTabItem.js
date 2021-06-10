import React, { useEffect, useState } from "react"
import { format } from "date-fns"

const ScheduleTabItem = ({ item }) => {
  // set up availability
  const [available, setAvailable] = useState(true)

  console.log(available)

  // useEffect to call function on component mount
  // useEffect(() => {
  //   // set up snipcart secret key
  //   const secret = process.env.GATSBY_SNIPCART_SECRET_API_KEY

  //   // set up product ID
  //   const productID = item.customFields.productID

  //   const getData = async () => {
  //     const request = await fetch(
  //       `https://app.snipcart.com/api/products/${productID}`,
  //       {
  //         headers: {
  //           Authorization: `Basic ${btoa(secret)}`,
  //           Accept: "application/json",
  //         },
  //       }
  //     )

  //     const result = await request.json()

  //     console.log(result)

  //     if (result.totalStock <= 0) {
  //       setAvailable(false)
  //     }
  //   }
  //   // invoke function
  //   getData()
  // }, [])

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
      {available ? (
        <button
          className="snipcart-add-item"
          data-item-id={item.customFields.productID}
          data-item-price={item.customFields.price}
          data-item-url="/api/products"
          data-item-description={item.customFields.description}
          data-item-image={item.customFields?.image?.url}
          data-item-name={item.customFields.title}
        >
          Sign Up
        </button>
      ) : (
        <p>CLASS FULL.</p>
      )}
    </div>
  )
}

export default ScheduleTabItem
