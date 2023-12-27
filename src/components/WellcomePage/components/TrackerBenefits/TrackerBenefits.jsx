import { useNavigate } from 'react-router-dom';
import {
  BenefitsList,
  BenefitsItems,
  Descr,
  Container,
  CalendarIcon,
  StatisticsIcon,
  SettingsIcon,
  MainTitle,
  SubTitle,
  Button,
} from './TrackerBenefits.styled';

export const TrackerBenefits = () => {
  const navigate = useNavigate();
  function TryClick() {
    navigate('/signup');
  }
  return (
    <Container>
      <MainTitle>Water consumption tracker</MainTitle>
      <Descr>Record daily water intake and track</Descr>
      <SubTitle>Tracker Benefits</SubTitle>
      <BenefitsList>
        <BenefitsItems>
          <CalendarIcon />
          Habit drive
        </BenefitsItems>
        <BenefitsItems>
          <StatisticsIcon />
          View statistics
        </BenefitsItems>
        <BenefitsItems>
          <SettingsIcon />
          Personal rate setting
        </BenefitsItems>
      </BenefitsList>

      <Button type="button" onClick={TryClick}>
        Try tracker
      </Button>
    </Container>
  );
};

export default TrackerBenefits;
