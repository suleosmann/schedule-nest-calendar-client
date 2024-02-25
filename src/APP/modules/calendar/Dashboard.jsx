import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';
import useAxiosPrivate from './../../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/users/calendar-events', {
          signal: controller.signal,
        });
        console.log('Response:', response);
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching calendar events:', err);
        setLoading(false);
        // Navigate to authentication page only if error is not due to component unmounting
        if (!controller.signal.aborted) {
          navigate('/authentication', { state: { from: location }, replace: true });
        }
      }
    };

    getUsers();

    return () => {
      controller.abort(); // Cancel the request if the component unmounts
    };
  }, []); // Run effect only once on component mount

  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
      <article>
        
        {loading ? (
          <p>Loading...</p>
        ) : users.length ? (
          <ul>
            {users.map((user, i) => (
              <li key={i}>{user?.username}</li>
            ))}
          </ul>
        ) : (
          <p>No users to display</p>
        )}
      </article>
    </div>
  );
}
