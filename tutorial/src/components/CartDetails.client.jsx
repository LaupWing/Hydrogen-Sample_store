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


const CartDetails = ({ onClose }) => {
   const { lines } = useCart()

   if(lines.length === 0) {
      return <CartEmpty onClose={onClose}/>
   }

   return (
      <form className="grid grid-cols-1 grid-rows-[1fr_auto] h-[calc(100vh-6rem)]">
         <section
            aria-aria-labelledby="cart-contents"
            className="px-4 pb-4 overflow-auto transition md:px-12"
         >
            <ul className="grid gap-6 md:gap-10 overflow-y-scroll">
               {lines.map(line => (
                  <CartLineProvider key={line.id} line={line}>
                     
                  </CartLineProvider>
               ))}
            </ul>
         </section>
      </form>
   )
}

export default CartDetails


export const CartEmpty = ({ onClose }) => {
   <div className="flex flex-col space-y-7 justify-center items-center md:py-8 md:px-12 px-4 py-6 h-screen">
      <h2 className="whitespace-pre-wrap max-w-prose font-bold text-4xl">
         Your cart is empty
      </h2>
      <button
         onClick={onClose}
         className="inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none bg-black text-white w-full"
      >
         Continue shopping
      </button>
   </div>
}

const CartCheckoutActions = () => {
   const { checkoutUrl } = useCart()

   return (
      <>
         <div className="flex flex-col items-center mt-6 md:mt-8">
            <Link
               to={checkoutUrl}
               className="inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none bg-black text-white w-full"
            >
               Continue to Checkout
            </Link>
            <CartShopPayButton className="flex items-center justify-center rounded-sm mt-2 bg-[#5a31f4] w-full"/>
         </div>
      </>
   )
}

const OrderSummary = () => {
   const { cost } = useCart()

   return (
      <>
         <dl className="space-y-2">
            <div className="flex items-center justify-between">
               <dt>Subtotal</dt>
               <dd>
                  {cost?.subtotalAmount?.amount ? (
                     <Money data={cost?.subtotalAmount}/>
                  ) :(
                     "-"
                  )}
               </dd>
            </div>
            <div className="flex items-center justify-between">
               <dt className="flex items-center">
                  <span>Shipping estimate</span>
               </dt>
               <dd className="text-green-600">
                  Free and carbon neutral
               </dd>
            </div>
         </dl>
      </>
   )
}