import { Tracker } from '../WellcomeForm/WellcomeForm.styled';
import { TrackerBenefits } from '../TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from '../TrackerInfo/TrackerInfo';
import HomeLayout from '../HomeLayout/HomeLayout';

const WellcomePage = () => {
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

export default WellcomePage;
