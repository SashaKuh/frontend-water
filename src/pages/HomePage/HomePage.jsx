import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { ImageOfBottle } from 'components/HomePage/ImageOfBottle';
import { WaterRatioPanel } from 'components/HomePage/WaterRatioPanel';
const HomePage = () => {
  return (
    <div className="container">
      <DailyNorma />
      <ImageOfBottle />
      <WaterRatioPanel />
    </div>
  );
};
export default HomePage;
