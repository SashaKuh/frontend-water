import { userSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router';

import { selectUserToken } from 'redux/selectors';

export const PublicPiute = ({ children }) => {
    const token = userSelector(selectUserToken);
    const location = useLocation();

    return !token ? children : <Navigate to={location.state ?? '/homepage'} />
}