import { useContext } from 'react';
import { AuthContext } from './../AuthProvider/AuthProvider';

const UseAuth = () => {
    return useContext(AuthContext);
}

export default UseAuth;