import React from "react"

const ProductCard = ({ product }) => {
   const {
      priceV2: price, 
      compareAtPriceV2: comparePrice
   } = product.variants?.nodes[0] || {}

   console.log(price)
   console.log(comparePrice)

   return <div>ProductCard</div>
}

export default ProductCard