import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div >
      <Header/>
      <div className='min-h-screen mt-20'>
      <Link
        to="/"
        className=" font-bold dark:text-white text-4xl  ">
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Guide's
        </span>{" "}
        Blog
      </Link>
      </div>
      <p>This is demop project. You can sign up with your emailand password or with google.</p>
      </div>
  )
}

export default SignIn