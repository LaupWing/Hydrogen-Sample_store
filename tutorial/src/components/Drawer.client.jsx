import { Transition, Dialog } from "@headlessui/react"
import { Fragment } from "react"


const Drawer = () => {
   return ( 
      <Transition appear show={open} as={Fragment}>
         <Dialog 
            as="div" 
            className="relative z-50" 
            onClose={()=>{}}
         >
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0 left-0"
               enterTo="opacity-100"
               leave="ease-out duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-black bg-opacity-25"/>
            </Transition.Child>
         </Dialog>
      </Transition>
   )
}

export default Drawer
