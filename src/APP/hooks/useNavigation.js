// Hook/useNavigation.js
import { useCallback } from 'react';

const useNavigation = () => {
  const navigate = useCallback((path) => {
    window.location.href = path;
  }, []);

  return navigate;
};

export default useNavigation;
