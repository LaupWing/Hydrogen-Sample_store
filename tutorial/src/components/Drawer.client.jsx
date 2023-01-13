import { Transition, Dialog } from "@headlessui/react"
import { Fragment } from "react"


const Drawer = ({open, onClose, children}) => {
   return ( 
      <Transition appear show={open} as={Fragment}>
         <Dialog 
            as="div" 
            className="relative z-50" 
            onClose={onClose}
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
            <div className="fixed inset-0">
               <div className="absolute insets-0 overflow-hidden">
                  <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                     <Transition.Child
                        as={Fragment}
                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                     >
                        <Dialog.Panel className="max-w-lg transform text-left align-middle shadow-xl transition-all antialiased bg-neutral-50">
                           <header className="sticky top-0 flex items-center justify-between px-4 h-24 sm:px-8 md:px-12">
                              <h2
                                 id="cart-contents"
                                 className="whitespace-pre-wrap max-w-prose font-bold text-lg"
                              >
                                 Cart
                              </h2>
                              <button
                                 type="button"
                                 className="p-4 m-4 transition text-primary hover:text-primary/50"
                              >

                              </button>
                           </header>
                           {children}
                        </Dialog.Panel>
                     </Transition.Child>
                  </div>
               </div>
            </div>
         </Dialog>
      </Transition>
   )
}

export default Drawer
