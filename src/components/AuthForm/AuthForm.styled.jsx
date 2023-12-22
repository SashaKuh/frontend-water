import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
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
  width: 384px;
  height: 312px;
  align-content: flex-start;
  margin-top: 40px;
`;

export const Input = styled(Field)`
  border-radius: 6px;
  border: 1px solid rgb(215, 227, 255);
  min-width: 384px;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 10px;
  line-height: 20px;
  margin-bottom: 16px;
  &::placeholder {
    color: #9ebbff;
  }
`;

export const SignInButton = styled.button`
  background-color: rgba(64, 123, 255, 1);
  min-width: 384px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  padding: 10px 30px;
  color: rgba(255, 255, 255, 1);
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
  color: #407bff;
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;
  margin-bottom: 6px;
`;
