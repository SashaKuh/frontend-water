import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router';
import { selectUserToken } from '../redux/selectors';

const PublicRoute = ({ children }) => {
    const token = useSelector(selectUserToken);
    const location = useLocation();

    return !token ? children : <Navigate to={location.state ?? '/homepage'} />;
}

export default PublicRoute