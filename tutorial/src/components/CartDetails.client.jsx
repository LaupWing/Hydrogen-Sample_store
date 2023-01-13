import {
   useCart,
   useCartLine,
   CartLineProvider,
   CartShopPayButton,
   CartLineQuantityAdjustButton,
   CartLinePrice,
   CartLineQuantity,
   Image,
   Link,
   Money,
 } from "@shopify/hydrogen"


const CartDetails = () => {
   const { lines } = useCart()

   if(lines.length === 0) {
      return
   }

   return <div>CartDetails</div>
}

export default CartDetails


export const CartEmpty = ({ onClose }) => {

}