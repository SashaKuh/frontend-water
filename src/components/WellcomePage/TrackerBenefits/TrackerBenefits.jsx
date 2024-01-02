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
import iconSprite from '../../../images/SVG/symbol-defs.svg';

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
          <CalendarIcon>
            <use href={iconSprite + '#icon-calendar-days'} />
          </CalendarIcon>
          Habit drive
        </BenefitsItems>
        <BenefitsItems>
          <StatisticsIcon>
            <use href={iconSprite + '#icon-presantation-chart-bar'} />
          </StatisticsIcon>
          View statistics
        </BenefitsItems>
        <BenefitsItems>
          <SettingsIcon>
            <use href={iconSprite + '#icon-wrench-screendriver'} />
          </SettingsIcon>
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
