import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { ImageOfBottle } from 'components/ImageOfBottle/ImageOfBottle';
import TodayAndMonthLayout from 'components/TodayAndMonthLayout/TodayAndMonthLayout';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';
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
