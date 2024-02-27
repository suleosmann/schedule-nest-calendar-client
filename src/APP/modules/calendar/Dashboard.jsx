import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import useAxiosPrivate from './../../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';
import CommonNavbar from '../../components/CommonNavbar';
import Footer  from '../../components/Footer';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
    <CommonNavbar />
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
    <Footer />
    </>
  );
}
