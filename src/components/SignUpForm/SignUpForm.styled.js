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
  flex-wrap: wrap;
  align-content: flex-end;
  margin-top: 40px;
  margin-bottom: 16px;
`;

export const Input = styled(Field)`
  font-family: 'Roboto-regular';
  border-radius: 6px;
  border: 1px solid rgb(215, 227, 255);
  min-width: 384px;
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
  }
`;

export const SignInButton = styled.button`
  font-family: 'Roboto-Medium';
  background-color: var(--primaryBlue);
  min-width: 384px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  line-height: 24px;
  padding: 10px 30px;
  color: var(--primaryWhite);
  cursor: pointer;
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
`;

export const MessageError = styled.div`
  color: var(--secondaryRed);
  margin-bottom: 8px;
  margin-top: -10px;
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
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 50px;
  // min-height: 100vh;
`;

export const BottleBackground = styled.div`
  min-height: calc(100vh - 68px);
  margin-top: 0%;
  background-image: url(${bottleBackground});
  background-size: 70%;
  background-position: top 10px left -100px;
  background-repeat: no-repeat;
`;
