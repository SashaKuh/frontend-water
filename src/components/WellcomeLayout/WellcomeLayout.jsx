import { HomeStyledLayout } from './WellcomeLayout.styled';

const HomeLayout = ({ children }) => {
  return (
    <>
      <HomeStyledLayout>{children}</HomeStyledLayout>
    </>
  );
};
export default HomeLayout;
