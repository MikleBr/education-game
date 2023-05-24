import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export function PrivateRoute({ children }) {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (!isLoading && !currentUser) {
    return <Navigate to={'/auth/signin'} replace />;
  }

  return children;
}
