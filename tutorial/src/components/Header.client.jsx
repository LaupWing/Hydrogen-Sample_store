import { Drawer, useDrawer } from "./Drawer.client"
import { useUrl, Link } from "@shopify/hydrogen"

const Header = ({ shop }) => {
   const { pathname } = useUrl()
   const { isOpen, openDrawer, closeDrawer } = useDrawer()

   const isHome = pathname === "/"

   return (
      <>
         <Drawer open={isOpen}/>
         <header
            role={"banner"}
            className={`flex items-center h-16 p-6 md:p-8 lg:p-12 sticky backdrop-blur-lg z-40 top-0 justify-between w-full leading-none gap-4 antialiased transition shadow-sm ${isHome ? "bg-black/80 text-white" : "bg-white/80"}`}
         >
            <div className="flex gap-12">
               <Link className="font-bold" to="/">
                  {shop.name}
               </Link>
            </div>

            <button
               onClick={openDrawer}
               className="relative flex items-center justify-center w-8 h-8"
            >
               
            </button>
         </header>
      </>
   )
}

export default Header
