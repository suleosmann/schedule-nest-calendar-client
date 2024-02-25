import { useState } from 'react';
import axios from 'axios';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/auth/login', { email, password }, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      });
      return response.data.accessToken;
    } catch (err) {
      if (!err.response) {
        setError('No Server Response');
      } else if (err.response.status === 400) {
        setError('Missing Username or Password');
      } else if (err.response.status === 401) {
        setError('Unauthorized');
      } else {
        setError('Login Failed');
      }
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
