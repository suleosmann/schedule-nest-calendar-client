import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from '../modules/landing/Home'

import Authentication from './../modules/authentication/authentication'
import Login from './../modules/authentication/Login'
import Signup from './../modules/authentication/Signup'
import UpdatePwd from './../modules/authentication/updatePwd'

import Dashboard from '../modules/calendar/Dashboard'
import Calendar from './../modules/calendar/calendar'

import Profile from './../modules/profile/VeiwProfile'

export default function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>

        <Route path='/authentication' element={<Authentication />}>
          <Route path="" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="updatepwd" element={<UpdatePwd />} />
        </Route>

        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<Calendar />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
