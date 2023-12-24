import { HomeStyledLayout } from './HomeLayout.styled';

const HomeLayout = ({ children }) => {
  return (
    <>
      <HomeStyledLayout>{children}</HomeStyledLayout>
    </>
  );
};
export default HomeLayout;
