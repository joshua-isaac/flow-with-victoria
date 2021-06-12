import axios from "axios"

// snipcart secret
const secret = process.env.GATSBY_SNIPCART_SECRET_API_KEY

// set up authentication
const auth = "Basic " + Buffer.from(secret + ":" + "").toString("base64")

// get products function
const getProducts = async () => {
  // fetch products from snipcart
  const products = await axios.get(`https://app.snipcart.com/api/products`, {
    headers: {
      Authorization: auth,
      Accept: "application/json",
    },
  })
  return products
}

export default async function handler(req, res) {
  // get products
  const rawProducts = await getProducts()

  // return clean object of product id's and stock (if applicable)
  const productStock = rawProducts.data.items.map(product => {
    return {
      id: product.userDefinedId,
      stock: product.stock,
    }
  })

  res.status(200).json(productStock)
}
