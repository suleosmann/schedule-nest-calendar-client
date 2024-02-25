import React, { useState, useEffect } from 'react';
import useAxiosPrivate from './../../hooks/useAxiosPrivate';
export default function VeiwProfile() {
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const controller = new AbortController();
  
    const fetchProfile = async () => {
      try {
        const response = await axiosPrivate.get('/user_info', {
          signal: controller.signal,
        });
        console.log('Response:', response.data);
  
      } catch (error) {
        console.error('Error fetching User Profile:', error);
        // Handle error and navigate if needed
      }
    };
  
    fetchProfile();
  
    return () => {
      controller.abort();
    };
  }, [axiosPrivate]);

  return (
    <div>VeiwProfile</div>
  )
}
