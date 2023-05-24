import { useContext } from 'react';
import { AuthContext } from '../context/auth';

export function useAuth() {
  const context = useContext(AuthContext);
  if (typeof context === 'undefined')
    throw new Error('Use hook inside AuthProvider');

  return context;
}
