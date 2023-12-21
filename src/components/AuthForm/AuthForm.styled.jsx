import styled from 'styled-components';
import { Field } from 'formik';

export const Title = styled.h1`
  font-size: 26px;
  line-height: 32px;
  font-weight: 500;
`;

export const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 384px;
  height: 312px;
`;

export const Input = styled(Field)`
  border-radius: 6px;
  border: 1px solid rgb(215, 227, 255);
  width: 384px;
  font-size: 16px;
  font-weight: 400;
  padding: 12px 10px;
  line-height: 20px;
`;

export const SignInButton = styled.button`
  background-color: rgba(64, 123, 255, 1);
  min-width: 324px;
  border-radius: 10px;
  border: none;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  width: 384px;
  padding: 12px 10px;
  color: rgba(255, 255, 255, 1);
`;
