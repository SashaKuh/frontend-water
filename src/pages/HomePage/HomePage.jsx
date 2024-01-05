import { DailyNorma } from 'components/Homepage/DailyNorma';
import { ImageOfBottle } from 'components/Homepage/ImageOfBottle/ImageOfBottle';
import TodayAndMonthLayout from 'components/TodayAndMonthLayout/TodayAndMonthLayout';
import { WaterRatioPanel } from 'components/Homepage/WaterRatioPanel/WaterRatioPanel';
import { LeftSideDiv, AllSidesDiv } from './HomePage.styled';
import { Background } from '../../components/AuthForm/AuthForm.styled';
const HomePage = () => {
  return (
    <Background>
      <div className="container">
        <AllSidesDiv>
          <LeftSideDiv>
            <DailyNorma />
            <ImageOfBottle />
            <WaterRatioPanel />
          </LeftSideDiv>
          <TodayAndMonthLayout />
        </AllSidesDiv>
      </div>
    </Background>
  );
};
export default HomePage;
