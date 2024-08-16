import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import summaryApi from '../common';
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice'


const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menuDisplay, setMenuDisplay] = useState(false)
  console.log("user header", user)

  const handlelogout = async () => {
    const fetchdata = await fetch(summaryApi.logout_user.url, ({
      method: summaryApi.logout_user.method,
      credentials: "include"
    }))

    const data = await fetchdata.json()

    if (data.success) {
      toast.success(data.message)
      dispatch(setUserDetails(null))

    }
    if (data.error) {
      toast.error(data.message)

    }
  }
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className=''>
          <Link to={"/"}>
            <Logo w={100} h={50} />
          </Link>
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md pl-2'>
          <input type='text' placeholder='Search product here...' className='w-full outline-none' />
          <div className='text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white'>
            <GrSearch />
          </div>
        </div>

        <div className='flex items-center gap-5'>

          <div className='relative flex justify-center' >
            <div className='text-3xl cursor-pointer relative flex justify-center ' onClick={() => setMenuDisplay(preve => !preve)}>
              {
                user?.profilePic ? (
                  <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                ) : (
                  <FaRegCircleUser />
                )
              }
            </div>

            {
              menuDisplay && (
                <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded'>
                  <nav>
                    <Link to={"admin panel"} className='whitespace-nowrap hover:bg-slate-100 p-2'>Admin Panel</Link>
                  </nav>
                </div>
              )
            }


          </div>

          <div className='text-2xl relative'>
            <span><FaShoppingCart /></span>
            <div className='bg-red-600 text-white w-5 h-5 p-1 flex items-center justify-center absolute -top-2 -right-3 rounded-full'>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            {
              user?._id ? (
                <button onClick={handlelogout} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Logout</button>
              ) : (
                <Link to={"/login"} className='px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700'>Login</Link>
              )
            }

          </div>

        </div>
      </div>

    </header>
  )
}

export default Header