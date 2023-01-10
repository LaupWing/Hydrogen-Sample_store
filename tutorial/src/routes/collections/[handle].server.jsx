import { 
   gql, 
   Seo, 
   ShopifyAnalyticsConstants, 
   useRouteParams, 
   useServerAnalytics, 
   useShopQuery 
} from "@shopify/hydrogen"
import { Suspense } from "react"
import Layout from "../../components/Layout.server"

const Collection = () => {
   const { handle } = useRouteParams()

   const {
      data: { collection }
   } = useShopQuery({
      query: QUERY,
      preload: false,
      variables: {
         handle
      }
   })

   useServerAnalytics({
      shopify: {
         pageType: ShopifyAnalyticsConstants.pageType.collection,
         resourceId: collection.id
      }
   })

   return (
      <Layout>
         <Suspense>
            <Seo 
               type="collection"
               data={collection}
            />
         </Suspense>
         <header className="grid w-full gap-8 p-4 py-8 md:p-8 lg:p-12 justify-items-start">
            <h1 className="text-4xl whitespace-pre-wrap font-bold inline-block">
               {collection.title}
            </h1>
            {collection.description && (
               <div className="flex items-baseline w-full justify-between">
                  <div>
                     <p className="max-w-md whitespace-pre-wrap inherit text-copy inline-block">
                        {collection.description}
                     </p>
                  </div>
               </div>
            )}
         </header>
      </Layout>
   )
}

export default Collection

const QUERY = gql`
   query CollectionDetails($handle: String!) {
      collection(handle: $handle) {
         id
         title
         description
         seo {
            description
            title
         }
         image {
            id
            url
            width
            height
            altText
         }
         products(first: 8) {
            nodes {
               id
               title
               publishedAt
               handle
               variants(first: 1){
                  nodes {
                     id
                     image {
                        url
                        altText
                        width
                        height
                     }
                     priceV2{
                        amount
                        currencyCode
                     }
                     compareAtPriceV2{
                        amount
                        currencyCode
                     }
                  }
               }
            }
         }
      }
   }
`
