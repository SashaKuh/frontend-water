import { DailyNorma } from 'components/Homepage/DailyNorma';
import { ImageOfBottle } from 'components/Homepage/ImageOfBottle/ImageOfBottle';
import TodayAndMonthLayout from 'components/TodayAndMonthLayout/TodayAndMonthLayout';
import { WaterRatioPanel } from 'components/Homepage/WaterRatioPanel/WaterRatioPanel';
const HomePage = () => {
  return (
    <div className="container">
      <DailyNorma />
      <ImageOfBottle />
      <WaterRatioPanel />
      <TodayAndMonthLayout />
    </div>
  );
};
export default HomePage;
