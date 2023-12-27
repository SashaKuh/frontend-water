import { Tracker } from '../WellcomeForm/WellcomeForm.styled';
import { TrackerBenefits } from '../TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from '../TrackerInfo/TrackerInfo';
import WellcomeLayout from '../WellcomeLayout/WellcomeLayout';

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
