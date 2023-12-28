import { Tracker, WellcomeLayout } from './WellcomePage.styled';
import { TrackerBenefits } from './components/TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from './components/TrackerInfo/TrackerInfo';

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
