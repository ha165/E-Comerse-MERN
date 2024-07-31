import React from 'react';
import LogoIcon from '../assest/signin.gif';
const Login = () => {
  return (
    <section id="login">
      <div className='mx-auto container p-4'>
        <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
          <div className='w-20 h-20 mx-auto'>
            <img src={LogoIcon} alt='login icon' />
          </div>
          <form>
            <div className='grid'>
              <label> Email:</label>
              <div v className='bg-slate-100 p-2'>
                <input type='email' placeholder='Enter email' className='w-full h-full outline-none bg-transparent' />
              </div>
            </div>

            <div>
              <label> Password:</label>
              <div>
                <input type='password' placeholder='Enter Password' />
              </div>
            </div>

            <button>Login</button>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Login