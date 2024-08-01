import React, { useState } from 'react'
import LogoIcon from '../assest/signin.gif';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
const SignUp = () => {
  const [showPassword, setshowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
  }
  console.log("Data login", data)
  return (
    <section id="signup" >
      <div className='mx-auto container p-4'>
        <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
          <div className='w-20 h-20 mx-auto'>
            <img src={LogoIcon} alt='login icon' />
          </div>

          <form className='pt-6 flex flex-col gap-2' onSubmit={handleOnSubmit}>

            <div className='grid'>
              <label> Email:</label>
              <div className='bg-slate-100 p-2'>
                <input type='email'
                  placeholder='Enter email'
                  name='email'
                  value={data.email}
                  className='w-full h-full outline-none bg-transparent'
                  onChange={handleOnChange} />
              </div>

              <div>
                <label> Password:</label>
                <div className='bg-slate-100 p-2 flex'>
                  <input type={showPassword ? "text" : "password"}
                    placeholder='Enter Password'
                    name='password'
                    value={data.password}
                    className='w-full h-full outline-none bg-transparent'
                    onChange={handleOnChange} />
                  <div className='cursor-pointer text-xl' onClick={() => setshowPassword((preve) => !preve)}>
                    <span>
                      {
                        showPassword ? (
                          <FaEyeSlash />
                        ) : (
                          <FaEye />
                        )
                      }
                    </span>

                  </div>
                </div>
                <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>
                  Forgot password ?
                </Link>
              </div>
            </div>

            <button className='bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6'>Login</button>

          </form>
          <p className='my-5'>Don't have account ? <Link to={"/sign-up"} className=' text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
        </div>
      </div>
    </section >
  )
}

export default SignUp