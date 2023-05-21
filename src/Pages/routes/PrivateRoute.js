import React, { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import { Navigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useContext(AuthContext);
    if (loading) {
        return <Loading></Loading>
    }
    if (users && users.uid) {
        return children;

    }

    return <Navigate to="/signIn"></Navigate>



};

export default PrivateRoute;