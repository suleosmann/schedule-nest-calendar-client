import React from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './../App'

import Authentication from './../modules/authentication/authentication'
import Login from './../modules/authentication/Login'
import Signup from './../modules/authentication/Signup'
import UpdatePwd from './../modules/authentication/updatePwd'

import Dashboard from './../modules/Home'
import Calendar from './../modules/calendar'

import Profile from './../modules/profile/VeiwProfile'
import authentication from './../modules/authentication/authentication';

export default function Routes() {
  return (
    <Router>
      <Routes>
        <Route path='/Home' element={<Home/>}>

          <Route path='/authentication' element={<authentication/>}>
            <Route path="" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/updatepwd" element={<UpdatePwd />} />
          </Route>

          <Route path='/Calendar' element={<Calendar/>}>
          </Route>

          <Route path='' element={}>
          </Route>

          <Route path='/dashboard' element={<Dashboard/>}>
            <Route path='/profile' element={<Profile/>}>
              <Route path="" element={<Profile />} />
              <Route path="" element={<Profile />} />
              <Route path="" element={<Profile />} />
            </Route>

          </Route>

        
        </Route>
      </Routes>
    </Router>
  )
}
