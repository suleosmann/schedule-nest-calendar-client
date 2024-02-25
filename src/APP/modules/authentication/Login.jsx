import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  const handleLogin = (e) =>{
    e.preventDefault();
    window.location.href = '/dashboard'; 
    console.log("clicked")
  }

  return (
    <div className="col-span-1 px-8 py-4 bg-green-100 rounded-lg shadow-md">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-yellow-500 italic">Log in</h1>
      <div className="border-b border-black w-full mx-auto mt-4"></div>
    </div>
    <form action="#" className="space-y-8">
      <div className="form-control">
        <label for="email" className="block text-sm font-medium text-gray-700">
          Enter your Email
        </label> 
        <div className="relative">
          <input type="email" id="email" placeholder="Email Address"
            className="w-full italic rounded-md border border-gray-300 py-2 px-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="form-control">
        <label for="password" className="block text-sm font-medium text-gray-700">
          Enter your password
        </label>
        <div className="relative">
          <input type="password" id="password" placeholder="Password"
            className="w-full italic rounded-md border border-gray-300 py-2 px-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
        </div>
      </div>
      
      <button type="submit"  onClick={handleLogin}
        className="btn bg-amber-500 w-full rounded-md py-2 px-4 text-center text-base font-medium shadow-sm hover:from-pink"
      >
        Log in
      </button>
      <div className="flex items-center justify-between">
        <hr className="w-full bg-gray-200" />
        <p className="text-sm text-gray-400">or</p>
        <hr className="w-full bg-gray-200" />
      </div>
      <div className="grid space-y-4  ">
        <a href="" className="text-sm text-center text-blue-600 hover:underline">
          <Link to="updatepwd">Forgot Password ?</Link>
        </a>
        <a href="" className="text-sm text-center text-blue-600 hover:underline">
          <Link to="signup">Don`t have an account? Sign Up</Link>
        </a>
      </div>
    </form>
  </div>
  )
}

export default Login