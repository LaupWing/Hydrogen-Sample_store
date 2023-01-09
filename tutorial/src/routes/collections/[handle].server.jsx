import { gql, useRouteParams, useShopQuery } from "@shopify/hydrogen"
import React from "react"
import Layout from "../../components/Layout.server"

const Collection = () => {
   const { handle } = useRouteParams()

   // const {
   //    data: { collection }
   // } = useShopQuery({
   //    query: QUERY,
   //    variables: {
   //       handle
   //    }
   // })

   // console.log(collection)

   return (
      <Layout>
         <section className="p-6 md:p-8 lg:p-12">
            This will be collection page for <strong>{handle}</strong>
         </section>
      </Layout>
   )
}

export default Collection

const QUERY = gql`
   query CollectionDetails($handle: String!) {
      collection(handle: $handle) {
         title
      }
   }
`
