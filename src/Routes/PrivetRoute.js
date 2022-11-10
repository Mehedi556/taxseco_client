import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const PrivetRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);
    const location =useLocation();

    if(loading){
        return <button className="btn btn-wide loading">loading</button>
    }

    if(user){
        return children;
    }else{
        return <Navigate to ="/login" state={{from: location}} replace></Navigate>;
    }
};

export default PrivetRoute;