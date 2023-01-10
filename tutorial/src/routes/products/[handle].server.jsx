import { gql, Seo, ShopifyAnalyticsConstants, useRouteParams, useServerAnalytics, useShopQuery } from "@shopify/hydrogen"
import { Suspense } from "react"
import Layout from "../../components/Layout.server"

const Product = () => {
   const { handle } = useRouteParams()

   const {
      data: { product }
   } = useShopQuery({
      query: PRODUCT_QUERY,
      preload: true,
      variables: {
         handle
      }
   })

   useServerAnalytics({
      shopify: {
         pageType: ShopifyAnalyticsConstants.pageType.product,
         resourceId: product.id
      }
   })

   return (
      <Layout>
         <Suspense>
            <Seo type="product" data={product}/>
         </Suspense>
         <section className="p-6 md:p-8 lg:p-12">
            This will be teh product page for <strong>{product.title}</strong>
         </section>
      </Layout>
   )
}

export default Product

const PRODUCT_QUERY = gql`
   query Product($language: LanguageCode, $handle: String!) @inContext(language: $language){
      product(handle: $handle){
         id
         title
         seo {
            title
            description
         }
      }
   }
`