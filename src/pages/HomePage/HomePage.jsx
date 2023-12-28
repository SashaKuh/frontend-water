import { DailyNorma } from 'components/DailyNorma/DailyNorma';
import { ImageOfBottle } from 'components/ImageOfBottle/ImageOfBottle';
import TestComponent from 'components/TestComponent/TestComponent';
import { WaterRatioPanel } from 'components/WaterRatioPanel/WaterRatioPanel';
const HomePage = () => {
  return (
    <div className="container">
      <DailyNorma />
      <ImageOfBottle />
      <WaterRatioPanel />
      <TestComponent />
    </div>
  );
};
export default HomePage;
