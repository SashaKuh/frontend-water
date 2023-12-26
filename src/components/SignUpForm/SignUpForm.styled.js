import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import bottleBackground from '../../images/PNG/images-desktop/btl_for_sign_in.png';
import backgroundImg from '../../images/PNG/images-desktop/bg_el_main_page.png';

export const Title = styled.h1`
  font-family: 'Roboto-Medium';
  color: var(--primaryBlack);
  font-size: 26px;
  display: block;
  line-height: 32px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const MainForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  align-content: flex-start;

  margin-top: 24px;

  @media screen and (min-width: 768px) {
    align-content: flex-start;
    flex-wrap: wrap;
    margin-top: 40px;
    &:not(:first-child) {
      align-items: flex-start;
    }
  }
  @media screen and (min-width: 1440px) {
    flex-wrap: wrap;
    align-content: flex-end;
    padding-top: 220px;
    margin: 0 198px 0 auto;
  }
`;

export const Input = styled(Field)`
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
    color: var(--primaryBlue);
    outline: none;
    color: ${({ hasError }) =>
      hasError ? 'var(--secondaryRed)' : 'var(--primaryBlue)'};
  }

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
  box-shadow: 0px 4px 8px 0px #407bff;
  &: hover,
  &:focus{
    box-shadow: 0px 4px 14px 0px #407BFF
  }
  @media screen and (min-width: 768px) {
    min-width: 336px;
    line-height: 24px;
    font-size:18px;
  }
  @media screen and (min-width: 1140px) {
    min-width: 384px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;
`;

export const PageLink = styled(Link)`
  font-family: 'Roboto-regular';
  color: var(--primaryBlue);
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  margin-top: 16px;
  &:hover {
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
  color: var(--primaryBlue);
  position: absolute;
  right: 10px;
  top: 40%;
  transform: translateY(-50%);
  fill: none;
  width: 16px;
  height: 16px;

  svg {
    width: 100%;
    height: 100%;
    fill: var(--primaryBlue);
  }
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Background = styled.main`
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  padding-bottom: 100px;
  min-height: 100vh;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundImg});
    background-size: cover;
    background-position: bottom center;
    background-repeat: no-repeat;
  }
  @media screen and (min-width: 1440px) {
    background-image: url(${backgroundImg});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const BottleBackground = styled.div`
  min-height: calc(100vh - 68px);
  background-image: url(${bottleBackground});
  background-size: 100%;
  background-position: center bottom 10px;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${bottleBackground});
    background-size: 100%;
    background-position: right -100px bottom 56px;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bottleBackground});
    background-size: 80%;
    position: relative;
    background-position: left -200px top 90px;
    background-repeat: no-repeat;
  }
`;
