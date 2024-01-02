import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
} from '../redux/users/usersSelectors.js';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userName = useSelector(selectUserName);

  return {
    isLoggedIn,
    isRefreshing,
    userName,
  };
};