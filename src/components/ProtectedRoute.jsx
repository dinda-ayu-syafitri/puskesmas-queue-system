import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import {Login} from '../pages';

const ProtectedRoute = ({children}) => {
  let token = JSON.parse(sessionStorage.getItem('token'))

  return (token ? children : <Navigate to={"/"}/>)
}

export default ProtectedRoute