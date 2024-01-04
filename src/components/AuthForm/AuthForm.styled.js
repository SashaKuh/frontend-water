import styled from 'styled-components';
import { Form } from 'formik';
import { Link } from 'react-router-dom';
import bottleBackgroundMob from '../../images/PNG/images-mobile/origin/btl_sign_in.png';
import bottleBackgroundTab from '../../images/PNG/images-tablet/origin/btl_for_sign_in.png';
import bottleBackgroundDesc from '../../images/PNG/images-desktop/origin/btl_for_sign_in.png';
import backgroundImgMob from '../../images/PNG/images-mobile/bg_el_sign_in.png';
import backgroundImgTab from '../../images/PNG/images-tablet/bg_el_home_screen.png';
import backgroundImgDesc from '../../images/PNG/images-desktop/bg_el_main_page.png';

export const Title = styled.h1`
  font-family: 'Roboto-Medium';
  color: var(--primaryBlack);
  font-weight: 500;
  font-size: 26px;
  line-height: 32px;
  margin-bottom: 16px;
`;

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    margin-right: auto;
    width: 336px;
    z-index: 100;
  }
  @media screen and (min-width: 1440px) {
    position: static;
    width: 384px;
    margin-top: 113px;
    margin-right: -198px;
  }
`;
export const FormSection = styled.div`
  @media screen and (min-width: 768px) {
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: flex-start;
    flex-direction: row-reverse;
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
  margin-bottom: 16px;
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
  @media screen and (min-width: 1140px) {
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
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  &:focus {
    box-shadow: none;
  }
  @media screen and (min-width: 768px) {
    min-width: 336px;
    line-height: 24px;
    font-size: 18px;
  }
  @media screen and (min-width: 1140px) {
    min-width: 384px;
  }
`;

export const Label = styled.label`
  font-family: 'Roboto-regular';
  color: var(--primaryBlack);
  display: block;
  margin-bottom: 8px;
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
  margin-top: 16px;
  &:hover,
  &:focus {
    color: var(--secondaryOrange);
  }
`;

export const MessageError = styled.div`
  color: var(--secondaryRed);
  margin-bottom: 8px;
  margin-top: -10px;
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
`;

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;
export const Background = styled.main`
  min-height: 100vh;
  background-image: url(${backgroundImgMob});
  padding-bottom: 24px;
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundImgTab});
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundImgDesc});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    padding-bottom: 20px;
  }
`;

export const BottleBackground = styled.div`
  background-image: url(${bottleBackgroundMob});
  min-height: calc(100vh - 68px);
  background-size: 100%;
  background-repeat: no-repeat;
  width: 280px;
  height: 210px;
  background-position: center bottom 10px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    width: 736px;
    height: 548px;
    background-image: url(${bottleBackgroundTab});
    z-index: -1;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bottleBackgroundDesc});
    margin-top: 0;
    background-position: -65px center;
    width: 916px;
    min-height: 680px;
  }
`;

export const LinkNav = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
`;
