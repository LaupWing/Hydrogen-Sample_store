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

const CartLineItem = () => {
   const { linesRemove } = useCart()
   const { id: lineId, quantity, merchandise } = useCartLine()

   return (
      <li 
         key={lineId} 
         className="flex"
      >
         <div className="flex-shrink-0">
            <Image
               data={merchandise.image}
               className="object-cover object-center w-24 h-24 border rounded md:w-28 md:h-28"
            />
         </div>

         <div className="flex justify-between flex-1 ml-4 sm:ml-6">
            <div className="relative grid gap-1">
               <h3 className="font-medium">
                  <Link to={`/products/${merchandise.product.handle}`}>
                     {merchandise.product.title}
                  </Link>
               </h3>
               <div className="flex flex-col justify-start mt-2">
                  {(merchandise?.selectedOptions || []).map(option => (
                     <span key={option.name} className="last:mb-4 text-gray-400">
                        {option.name}: {option.value}
                     </span>
                  ))}
               </div>

               <div className="flex items-center gap-2 mt-auto">
                  <div className="flex justify-start text-copy mr-4">
                     {/* <CartLine */}
                  </div>
               </div>
            </div>
         </div>
      </li>
   )
}

const CartLineQuantityAdjust = ({ lineId, quantity }) => (
   <>
      <label htmlFor={`quantity-${lineId}`} className="sr-only">
         Quantity, {quantity}
      </label>
      <div className="flex items-center overflow-auto border rounded">
         <CartLineQuantityAdjustButton
            adjust="decrease"
            aria-label="Decrease quantity"
            className="h-[40px] flex justify-center items-center px-3 py-[0.125rem] transition text-primary/40 hover:text-primary disabled:pointer-events-none disabled:cursor-wait"
         >
            &#8722;
         </CartLineQuantityAdjustButton>
         <CartLineQuantity
            as="div"
            className="h-[40px] flex justify-center items-center text-center py-[0.125rem] px-2 text-primary/90"
         />
         <CartLineQuantityAdjustButton
            adjust="increase"
            aria-label="Increase quantity"
            className="h-[40px] flex justify-center items-center px-3 py-[0.125rem] transition text-primary/40 hover:text-primary disabled:pointer-events-none disabled:cursor-wait"
         >
            &#43;
         </CartLineQuantityAdjustButton>
      </div>
   </>
)