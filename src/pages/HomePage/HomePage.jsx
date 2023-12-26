import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { ImageOfBottle } from 'components/ImageOfBottle/ImageOfBottle';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';
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
