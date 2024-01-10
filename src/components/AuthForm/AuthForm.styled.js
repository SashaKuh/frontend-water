import styled from 'styled-components';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import bottleBackgroundMob from '../../images/PNG/images-mobile/origin/btl_sign_in.png';
import bottleBackgroundTab from '../../images/PNG/images-tablet/origin/btl_for_sign_in.png';
import bottleBackgroundDesc from '../../images/PNG/images-desktop/origin/btl_for_sign_in.png';
import backgroundImgMob from '../../images/PNG/images-mobile/bg_el_sign_in.png';
import backgroundImgDesc from '../../images/PNG/images-desktop/bg_el_main_page.png';
import bottleBgSolo from '../../images/PNG/images-desktop/btl_home_screen.png'
import bgForTablet from '../../images/PNG/images-tablet/bg_el_home_screen.png'

export const Title = styled.h1`
  font-family: 'Roboto-Medium';
  color: var(--primaryBlack);
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  /* margin-bottom: 16px; */
`;

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  @media screen and (min-width: 768px) {
    margin-right: auto;
    width: 336px;
    position: absolute;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    padding-top: 113px;
    margin-right: -190px;
  }
`;
export const FormSection = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`;
export const Input = styled.input`
  font-family: 'Roboto-regular';
  border-radius: 6px;
  border: 1px solid rgb(215, 227, 255);
  min-width: 280px;
  font-size: 16px;
  padding: 12px 10px;
  line-height: 20px;
  // margin-bottom: 16px;
  &::placeholder {
    color: var(--secondaryBlue);
  }
  &:focus {
    outline: none;
  }

  ${({ $hasError }) =>
    $hasError &&
    `
      border-color: var(--secondaryRed) !important;
      color: var(--secondaryRed);
    `}

  @media screen and (min-width: 768px) {
    min-width: 336px;
  }
  @media screen and (min-width: 1440px) {
    min-width: 384px;
  }
`;

export const SignInButton = styled.button`
  font-family: 'Roboto-Medium';
  background-color: var(--primaryBlue);
  min-width: 280px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  padding: 8px 30px;
  color: var(--primaryWhite);
  cursor: pointer;
  box-shadow: 0px 4px 8px 0px #407bff;
  transition: box-shadow 0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98);
  &:hover {
    box-shadow: 0px 4px 14px 0px #407bff;
  }
  &:focus {
    /* box-shadow: none; */
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

export const Label = styled.label`
  font-family: 'Roboto-regular';
  color: var(--primaryBlack);
  display: block;
  font-size: 18px;
  line-height: 24px;
`;

export const PageLink = styled(Link)`
  font-family: 'Roboto-regular';
  display: inline-block;
  color: var(--primaryBlue);
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  /* margin-top: 16px; */
  &:hover,
  &:focus {
    color: var(--secondaryOrange);
    transition: color 0.3s ease;
  }
`;

export const MessageError = styled.div`
  color: var(--secondaryRed);
  @media screen and (min-width: 768px) {
    width: 336px;
  }
  @media screen and (min-width: 1440px) {
    width: 364px;
  }
`;

export const EyeIcon = styled.svg`
  cursor: pointer;
  stroke: var(--primaryBlue);
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  fill: none;
  width: 16px;
  height: 16px;
  margin-top: 5px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;
export const Background = styled.main`
  /* background-image: url(${backgroundImgMob}); */
  padding-left: 20px;
  padding-right: 20px;
  margin-right: auto;
  margin-left: auto;
  width: 320px;
  padding-top: 86px;
  /* background-repeat: no-repeat;
  background-position: center bottom; */

  @media screen and (min-width: 768px) {
    /* background-image: url(${bottleBackgroundTab}); */
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    /* background-position: center; */
  }

  @media screen and (min-width: 1440px) {
    /* background-image: url(${backgroundImgDesc}); */
    width: 1440px;
    padding-left: 112px;
    padding-right: 112px;
  }
`;

export const BottleBackground = styled.div`
  background-image: url(${bottleBackgroundMob});
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 80vh;

  background-position: center bottom;

  @media screen and (min-width: 768px) {
    background-image: url(${bottleBgSolo});
    background-position: 80px center;
    /* background-image: none; */
    width: 736px;
    height: 548px;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bottleBackgroundDesc});
    margin-top: 0;
    background-position: -65px center;
    width: 916px;
    min-height: 680px;
  }
`;


export const Layout = styled.div`
height: 100vh;
  background-image: url(${backgroundImgMob});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(${bgForTablet});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundImgDesc});
  }
`

// export const LinkNav = styled.div`
//   display: flex;
//   flex-direction: column;
//   max-width: fit-content;
// `;

export const LableContainer = styled.div`
font-size: 18px;
    line-height: calc(1.33333);
    color: rgb(47, 47, 47);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
`;

export const LabelDiv = styled.div`
  font-size: 18px;
    line-height: calc(1.33333);
    color: rgb(47, 47, 47);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
`;