import { Tracker, WellcomeLayout } from './WellcomePage.styled';
import { TrackerBenefits } from './TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from './TrackerInfo/TrackerInfo';

const WellcomePage = () => {
  return (
    <WellcomeLayout className="response-background">
      <Tracker className="container">
        <TrackerBenefits />
        <TrackerInfo />
      </Tracker>
    </WellcomeLayout>
  );
};

export default WellcomePage;
