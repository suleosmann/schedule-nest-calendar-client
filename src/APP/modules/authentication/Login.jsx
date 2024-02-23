import React from 'react'
import { useRef, useState, useEffect } from 'react';
import useAuth from './../../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from './../../api/axios';

function Login() {
  const { setAuth } = useAuth();

  const LOGIN_URL = '/auth/login';
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            setAuth({ user, pwd, accessToken });
            setEmail('');
            setPwd('');
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

  return (
    <div className="col-span-1 px-8 py-4 bg-gray-100 rounded-lg shadow-md">
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-yellow-500">Log in</h1>
      <div className="border-b border-black w-full mx-auto mt-4"></div>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    </div>
    <form action="#" className="space-y-8">
      <div className="form-control">
        <label for="email" className="block text-base font-medium text-gray-700">
          Enter your Email
        </label>
        <div className="relative">
          <input type="email" id="email" placeholder="Email Address"
            ref={userRef}
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="w-full rounded-md border border-gray-300 py-2 px-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="form-control">
        <label for="password" className="block text-base font-medium text-gray-700">
          Enter your password
        </label>
        <div className="relative">
          <input type="password" id="password" placeholder="Password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
            className="w-full rounded-md border border-gray-300 py-2 px-4 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
        </div>
      </div>
      
      <button type="submit"  onClick={handleLogin}
        className="btn bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  w-full rounded-md py-2 px-4 text-center text-base font-medium shadow-sm hover:from-pink-500 hover:to-yellow-500 active:from-yellow-400 active:to-pink-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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