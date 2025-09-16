import React from 'react'

import { Navigate, useLocation } from 'react-router-dom';
  import { useTheme } from '../../context/ThemeContext';

export default function ProtectedRoute({children}) {
    const {isAuth} = useTheme();
  
 const data = useLocation();
    return isAuth? children : <Navigate to="/" state={data.pathname} replace />
}
