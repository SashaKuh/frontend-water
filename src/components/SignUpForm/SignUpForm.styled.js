import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';

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
  align-content: flex-start;
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
  display: block;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  margin-bottom: 6px;
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

export const Background = styled.section`
  background-size: cover;
 min-height: 100vh
  background-position: center bottom;
  background-repeat: no-repeat;

`;
