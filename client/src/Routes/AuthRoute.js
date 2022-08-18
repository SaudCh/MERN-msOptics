import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Components/Context/AuthContext';

const AuthRoute = ({ component }) => {
    const auth = useContext(AuthContext);

    if (!auth.isLoggedIn) {
        return component;
    }

    return <Navigate to="/" />;
};

export default AuthRoute;