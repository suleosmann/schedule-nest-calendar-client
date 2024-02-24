import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from "react";
import useAxiosPrivate from "./../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";

export default function Dashboard() {


  const [users, setUsers] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
        try {
            const response = await axiosPrivate.get('/users/calendar-events', {
                signal: controller.signal
            });
            console.log(response.data);
            isMounted && setUsers(response.data);
        } catch (err) {
            console.error(err);
            navigate('/authentication', { state: { from: location }, replace: true });
        }
    }

    getUsers();

    return () => {
        isMounted = false;
        controller.abort();
    }
}, [])





  return (
    <div className='flex'>
          <Sidebar/>
          <Outlet/>
          <article>
            <h2>Users List</h2>
            {users?.length
                ? (
                    <ul>
                        {users.map((user, i) => <li key={i}>{user?.username}</li>)}
                    </ul>
                ) : <p>No users to display</p>
            }
        </article>
    </div>
  )
}
