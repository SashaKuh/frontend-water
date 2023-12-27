import { Tracker, WellcomeLayout } from './WellcomePage.styled';
import { TrackerBenefits } from '../TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from '../TrackerInfo/TrackerInfo';

const WellcomePage = () => {
  return (
    <WellcomeLayout>
      <div className="container">
        <Tracker>
          <TrackerBenefits />
          <TrackerInfo />
        </Tracker>
      </div>
    </WellcomeLayout>
  );
};

export default WellcomePage;
