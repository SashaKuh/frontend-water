import { Tracker, WellcomeLayout } from './WellcomePage.styled';
import { TrackerBenefits } from './TrackerBenefits/TrackerBenefits';
import { TrackerInfo } from './TrackerInfo/TrackerInfo';

const WellcomePage = () => {
  return (
    <WellcomeLayout className='static-background'>
      
        <Tracker>
          <TrackerBenefits />
          <TrackerInfo />
        </Tracker>
     
    </WellcomeLayout>
  );
};

export default WellcomePage;
