import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ProtectedRoute = ({ routePage }) => {

  const { userState } = useContext(UserContext);

  if (!userState) {
    return <Navigate to={"/"} replace />
  }

  return routePage

  // return userState ? routePage : <Navigate to={"/"} />;

}

export default ProtectedRoute
