import { CacheLong, gql, Image, Link, useShopQuery } from "@shopify/hydrogen"

const FeaturedCollections = () => {
   const {
      data: { collections }
   } = useShopQuery({
      query: QUERY,
      preload: true,
      cache: CacheLong()
   })

   return (
      <section className="w-full gap-4 md:gap-8 grid p-6 md:p-8 lg:p-12">
         <h2 className="whitespace-pre-wrap max-w-prose font-bold text-lead">
            Collections
         </h2>
         <div className="grid-flow-row grid gap-2 gap-y-6 md:gap-4 lg:gap-6 grid-cols-1  sm:grid-cols-3">
            {collections.nodes.map((collection) => (
               <Link 
                  key={collection.id}
                  to={`/collections/${collection.handle}`}
               >
                  <div className="grid gap-4">
                     {collection?.image && (
                        <Image
                           className="rounded shadow-border overflow-clip inline-block aspect-[5/4] md:aspect-[3/2] object-cover"
                           width={"100%"}
                           height={336}
                           alt={`Image of collection ${collection.title}`}
                           data={collection.image}
                        />
                     )}
                     <h2 className="whitespace-pre-wrap max-w-prose font-medium text-copy">
                        {collection.title}
                     </h2>
                  </div>
               </Link>
            ))}
         </div>
      </section>
   )
}

export default FeaturedCollections

const QUERY = gql`
   query FeaturedCollections {
      collections(first: 3, query: "collection_type:smart", sortKey: UPDATED_AT){
         nodes {
            id,
            title,
            handle
            image {
               altText
               width
               height
               url
            }
         }
      }
   }
`
