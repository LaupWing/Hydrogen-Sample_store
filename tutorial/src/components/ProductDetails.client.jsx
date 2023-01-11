import { ProductOptionsProvider } from "@shopify/hydrogen"

const ProductDetails = ({ product }) => {
   return (
      <ProductOptionsProvider data={product}>
         <section className="w-full overflow-x-hidden gap-4 md:gap-8 grid px-6 md:px-8 lg:px-12">
            <div className="grid items-start gap-6 lg:gap-20 md:grid-cols-2 lg:grid-cols-3">
               <div className="grid md:grid-flow-row md:p-0 md:overflow-x-auto md:grid-cols-2 md:w-full lg:col-span-2">
                  <div className="md:col-span-2 snap-center card-image aspect-square md:w-full w-[80vw] shadow rounded">

                  </div>
               </div>
            </div>
            <div className="mt-8">
               <div
                  className="prose border-t border-gray-200 pt-6 text-black text-md"
                  dangerouslySetInnerHTML={{
                     __html: product.descriptionHtml
                  }}
               />
            </div>
         </section>
      </ProductOptionsProvider>
   )
}

export default ProductDetails
