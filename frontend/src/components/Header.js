import React from 'react'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <header className='h-16 shadow-md'>
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className=''>
          <Logo w={100} h={50} />
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
          <input type='text' placeholder='Search product here...' className='w-full outline-none' />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>

        <div className='flex items-center gap-5'>

          <div className='text-3xl cursor-pointer relative flex justify-center'>
            <FaRegCircleUser />
          </div>

          <div className='text-2xl relative'>
            <span><FaShoppingCart /></span>
            <div className='bg-red-600 text-white w-5 h-5 p-1 flex items-center justify-center absolute -top-2 -right-3 rounded-full'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            <button className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</button>
          </div>

        </div>
      </div>

    </header>
  )
}

export default Header