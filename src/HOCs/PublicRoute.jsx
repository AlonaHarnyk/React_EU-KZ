import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(selectToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to="/" /> : children;
};
