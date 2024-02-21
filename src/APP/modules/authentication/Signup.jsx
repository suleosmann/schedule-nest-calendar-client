import React from 'react'
import { Link } from 'react-router-dom'

function SignUpForm() {
  const handleSignUp = (e) =>{
    e.preventDefault();
    window.location.href = '/dashboard'; 
    console.log("clicked")
  }
    return (
        <div className="col-span-1 px-8 py-4 bg-gray-100 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-yellow-500">Sign Up</h1>
            <div className="border-b border-black w-full mx-auto mt-4"></div>
          </div>
          <form action="#" className="space-y-8">
            <div className="form-control">
              <label for="email" className="block text-sm font-medium text-gray-700">
                Enter your Email
              </label>
              <div className="relative">
                <input type="email" id="email" placeholder="Email Address"
                  className="w-full rounded-md border border-gray-300 py-2 px-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                />
              </div>
            </div>
            <div className="form-control">
              <label for="password" className="block text-sm font-medium text-gray-700">
                Enter your password
              </label>
              <div className="relative">
                <input type="password" id="password" placeholder="Password"
                  className="w-full rounded-md border border-gray-300 py-2 px-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="form-control">
              <label for="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm password
              </label>
              <div className="relative">
                <input type="password" id="confirmPassword" placeholder="Password"
                  className="w-full rounded-md border border-gray-300 py-2 px-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
            <button type="submit" onClick={handleSignUp}
              className="btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-full rounded-md py-2 px-4 text-center text-base font-medium shadow-sm hover:from-pink-500 hover:to-yellow-500 active:from-yellow-400 active:to-pink-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            > Sign up
            </button>
            <div className="flex items-center justify-between">
              <hr className="w-full bg-gray-200" />
              <p className="text-sm text-gray-400">or</p>
              <hr className="w-full bg-gray-200" />
            </div>
            <div className="grid space-y-4  ">
              <a href="#" className="text-sm text-center text-blue-600 hover:underline">
                <Link to="/authentication">Already have an account? Log in</Link>
              </a>
            </div>
          </form>
        </div>
      )
    }

export default SignUpForm