import { CacheLong, gql, Seo, useShopQuery } from "@shopify/hydrogen"
import { Suspense } from "react"
import Header from "./Header.client"


const Layout = ({ children }) => {
   const {
      data: { shop }
   } = useShopQuery({
      query: SHOP_QUERY,
      cache: CacheLong(),
      preload: true
   })

   return (
      <>
         <Suspense>
            <Seo
               type="defaultSeo"
               data={{
                  title: shop.name,
                  description: shop.description
               }}
            />
         </Suspense>
         <div className="flex flex-col min-h-screen antialiased bg-neutral-50">
            <div>
               <a 
                  href="@mainContent" 
                  className="sr-only"
               >
                  Skip to content
               </a>
            </div>
            <Header shop={shop}/>

            <main 
               role={"main"}
               id="mainContent"
               className="flex-grow"
            >
               <Suspense>
                  {children}
               </Suspense>
            </main>
         </div>
      </>
   )
}

export default Layout

const SHOP_QUERY = gql`
   query ShopInfo {
      shop {
         name
         description
      }
   }
`