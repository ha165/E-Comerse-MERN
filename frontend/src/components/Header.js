import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
const Header = () => {
  return (
    <header className='h-16 shadow-md'>
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
         <div className=''>
            <Logo w={100} h={50}/>
         </div>

         <div className='flex items-center w-full justify-between max-w-sm'>
           <input type='text' placeholder='Search product here...'/>
           <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full'>
              <CiSearch/>
           </div>
         </div>

         <div>
          user icons and cards
         </div>
      </div>
      
    </header>
  )
}

export default Header