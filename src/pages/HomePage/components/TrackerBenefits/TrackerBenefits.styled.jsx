import styled from 'styled-components';
import theme from 'CommonStyle/themeJSX';
import { ReactComponent as CalendarIconSvg } from '../../../../images/home/icons/calendar.svg';
import { ReactComponent as StatisticsIconSvg } from '../../../../images/home/icons/statistics.svg';
import { ReactComponent as SettingsIconSvg } from '../../../../images/home/icons/settings.svg';

export const BenefitsList = styled.ul`
  font-size: ${theme.fontSizes.small};
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
  color: ${theme.colors.primaryDark};
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: ${theme.fontSizes.large};
    line-height: calc(32 / 26);
  }
`;
export const Container = styled.div`
  margin-bottom: 40px;
  @media only screen and (min-width: 1440px) {
    font-size: ${theme.fontSizes.large};
    margin-right: 81px;
    margin-bottom: 0;
  }

  @media only screen and (min-width: 767px) and (max-width: 1439px) {
    margin-bottom: 60px;
  }
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
