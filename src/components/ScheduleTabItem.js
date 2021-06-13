import React, { useEffect, useState } from "react"
import axios from "axios"
import { format } from "date-fns"

const ScheduleTabItem = ({ item }) => {
  // set up availability
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    // get stock function
    const getStock = async () => {
      // get stock from api
      const stock = await axios.get(`/api/getstock`)

      // find stock for item
      const productStock = stock.data.find(
        product => product.id === item.customFields.productID
      )

      // if we're managing stock, and stock is less than or equal to 0 set availability to false
      if (productStock.stock <= 0) {
        setAvailable(false)
      }
    }

    // if we've enabled manage stock in Agility, invoke function
    if (item.customFields.manageStock === "true") {
      getStock()
    }
  }, [item.customFields.productID])

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
        <p className="class__full">
          This class is currently full. Check back next week!
        </p>
      )}
    </div>
  )
}

export default ScheduleTabItem
