
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { storedata } from '../store/store.js';

const PrivateRoute = ({ children }) => {
  const dispatch=useDispatch()
  const userdata=dispatch(storedata(JSON.parse(localStorage.getItem('userdata'))))


  const user = useSelector((state) => state.Reducer.userdata)
  
  
  if (!user) {
    // Redirect to signup page if user is not authenticated
    return <Navigate to="/signup" />;
  }

  return children;
};

export default PrivateRoute;
