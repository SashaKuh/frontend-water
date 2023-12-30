import styled from 'styled-components';

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
font-family: 'Roboto-regular';
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
font-family: 'Roboto-regular';
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
font-family: 'Roboto-Bold';
  font-size: 36px;
  line-height: calc(42 / 36);
  font-weight: 700;
  color: var(--primaryBlack);

  margin-bottom: ${props => props.$marginBottom || '16px'};
  /* margin-top: ${props => props.$marginTop || '16px'}; */

  @media only screen and (max-width: 767px) {
    font-size: 28px;
    line-height: calc(32 / 28);
  }
`;

export const SubTitle = styled.h2`
font-family: 'Roboto-Medium';
  font-size: var(--fontSizesMedium);
  font-weight: 700;
  line-height: calc(20 / 18);

  margin-bottom: 12px;
`;

export const CalendarIcon = styled.svg`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  fill: var(--primaryBlue);
`;
export const StatisticsIcon = styled.svg`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  fill: var(--primaryBlue);
`;
export const SettingsIcon = styled.svg`
  margin-right: 8px;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  fill: var(--primaryBlue);
`;

export const Button = styled.button`
  padding-right: 100px;
  font-family: 'Roboto-Medium';
  font-size: 16px;
  background-color: var(--primaryBlue);
  width: 100%;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  max-width: 280px;
  padding: 8px 30px;
  color: var(--primaryWhite);
  cursor: pointer;
  box-shadow: 0px 4px 8px 0px #407bff;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 14px 0px #407bff;
  }
  @media screen and (min-width: 768px) {
    min-width: 336px;
    line-height: 24px;
    font-size: 18px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`;
