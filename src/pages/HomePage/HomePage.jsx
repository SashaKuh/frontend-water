import { Tracker } from './HomePage.styled';
import { TrackerBenefits } from '../HomePage/components/TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from '../HomePage/components/TrackerInfo/TrackerInfo';
import HomeLayout from '../HomePage/components/HomeLayout/HomeLayout';

const HomePage = () => {
  return (
    <HomeLayout>
      <div className="container">
        <Tracker>
          <TrackerBenefits />
          <TrackerInfo />
        </Tracker>
      </div>
    </HomeLayout>
  );
};

export default HomePage;
