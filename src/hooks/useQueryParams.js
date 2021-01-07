import { useLocation } from 'react-router-dom';

function useQueryParams() {
  const location = useLocation();
  return new URLSearchParams(location.search);
}

export default useQueryParams;
