import React from 'react'
import { useAuth } from '../Context/Authinicetion'
import { Navigate } from 'react-router-dom';

export default function Privaterouter({children}) {
  const {currentUser} =  useAuth();
  return currentUser ? children : <Navigate to="/login" replace="true"/> 
}
