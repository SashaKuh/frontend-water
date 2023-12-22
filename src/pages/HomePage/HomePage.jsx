import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/root/selectors';
import Loader from 'components/Loader';

const HomePage = () => {
  const isLoading = useSelector(selectIsLoading);

  return <div>{isLoading && <Loader />}</div>;
};

export default HomePage;
