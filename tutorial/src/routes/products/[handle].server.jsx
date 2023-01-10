import { gql, useRouteParams } from "@shopify/hydrogen"
import Layout from "../../components/Layout.server"

const Product = () => {
   const { handle } = useRouteParams()

   return (
      <Layout>
         <section className="p-6 md:p-8 lg:p-12">
            This will be teh product page for <strong>{handle}</strong>
         </section>
      </Layout>
   )
}

export default Product

const PRODUCT_QUERY = gql`
   query Product($language: LanguageCode, $handle: String!) @inContext(language: $language){
      product(handle: $handle){
         id
      }
   }
`