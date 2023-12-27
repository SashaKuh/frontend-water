import styled from 'styled-components';
// import theme from 'CommonStyle/themeJSX';
import { ReactComponent as CalendarIconSvg } from '../../images/SVG/icons/calendar.svg';
import { ReactComponent as StatisticsIconSvg } from '../../images/SVG/icons/statistics.svg';
import { ReactComponent as SettingsIconSvg } from '../../images/SVG/icons/settings.svg';

export const BenefitsList = styled.ul`
  font-size: 16px;
  line-height: calc(20 / 16);
  margin-bottom: 24px;

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const BenefitsItems = styled.li`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1440px) {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const Descr = styled.p`
  font-size: 24px;
  line-height: calc(30 / 24);
  color: var(--primaryBlack);
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: var(--fontSizesLarge);
    line-height: calc(32 / 26);
  }
`;
export const Container = styled.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 1440px) {
    font-size: var(--fontSizesLarge);
    margin-right: 81px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 767px) and (max-width: 1439px) {
    margin-bottom: 60px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 36px;
  line-height: calc(42 / 36);
  font-weight: 700;
  color: var(--primaryBlack);

  margin-bottom: ${props => props.$marginBottom || '16px'};
  margin-top: ${props => props.$marginTop || '16px'};

  @media only screen and (max-width: 767px) {
    font-size: 28px;
    line-height: calc(32 / 28);
  }
`;

export const SubTitle = styled.h2`
  font-size: var(--fontSizesMedium);
  font-weight: 700;
  line-height: calc(20 / 18);

  margin-bottom: 12px;
`;

export const CalendarIcon = styled(CalendarIconSvg)`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;
export const StatisticsIcon = styled(StatisticsIconSvg)`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;
export const SettingsIcon = styled(SettingsIconSvg)`
  margin-right: 8px;
  @media only screen and (max-width: 767px) {
    height: 32px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  font-size: var(--fontSizesSmall);
  line-height: calc(20 / 16);
  font-weight: 500;
  text-align: center;
  color: #fff;

  outline: none;
  border: none;
  border-radius: 10px;
  background-color: var(--primaryBlue);
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

  transition: all var(--animationCubicBezier);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:active {
    box-shadow: none;
  }
  &:disabled {
    background-color: var(--secondaryBlue);
    cursor: not-allowed;
  }
  width: 280px;
  height: 36px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: calc(24 / 18);
    width: 336px;
    height: 44px;
  }
  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;
