import ReactModal from 'react-modal';
import styled from 'styled-components';
import { TimePicker  } from 'antd';

export const StyledModal = styled(ReactModal)`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color: var(--primaryWhite);
color: var(--primaryBlack);
padding: 24px 12px;
border-radius: 10px;
font-size: 18px;
line-height: 1.1;
font-family: 'Roboto-regular';
box-sizing: border-box;
overflow-y: auto;
width: 280px;

@media (min-width: 1440px) {
    width: 592px;
    padding: 32px 24px;
  }

@media (min-width: 768px) and (max-width: 1439px){
    width: 704px;
    padding: 32px 24px;
  }
@media (min-width: 320px) and (max-width: 767px){
    width: 280px;
  }
  &.ReactModal__Overlay--after-open {
    border: none;
  }
`;

export const Title = styled.h1`
font-size: 26px;
line-height: 1.25;
margin-bottom: 24px;
`;

export const BtnSvg = styled.button`
/* padding: 0;
width: 36px;
height: 36px;
border: none;
background-color: var(--primaryWhite); */

@media (min-width: 768px) and (max-width: 1439px){
    top: 36px; 
    right: 24px;
  }
`;

// export const SvgClose = styled.svg`
// fill: var(--primaryBlue);
// transform: rotate(45deg); 
// width: 36px;
// height: 36px;
// `;

export const Svg = styled.svg`
fill: var(--primaryBlue);
`;

export const WrapSvg = styled.button`
font-family: 'Roboto-Bold';
width: 92px;
display: flex;
align-items: center;
justify-content: center;
width: 44px;
height: 44px;
background-color: var(--primaryWhite);
border-radius: 30px;
border: 1px solid var(--secondaryBlue);
box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
`;

export const WrapHeader = styled.div`
display: flex;
justify-content: space-between;
`;

export const CounterDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: var(--primaryBlue);
font-family: 'Roboto-Bold';
width: 92px;
height: 36px;
border-radius: 40px;
background-color: var(--secondaryDarkGrey);
`;

export const CounterWrap = styled.div`
display: flex;
margin-top: 12px;
margin-bottom: 24px;
align-items: center;
gap: 7px;
`;

export const Button = styled.button`
background-color: var(--primaryBlue);
border: none;
width: 100%;
height: 36px;
color: var(--primaryWhite);
font-size: 16px;
font-family: 'Roboto-Medium';
line-height: 1.3;
border-radius: 10px;
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);

&:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54)
  }

  &:focus {
    box-shadow: none;
    outline: none;
  }

@media (min-width: 768px) {
    width: 160px;
    height: 44px;
    font-size: 18px;
  }
`;

export const TitleInput = styled.p`
margin-bottom: 16px;
font-family: 'Roboto-Medium';
`;

export const TextInput = styled.p`
font-size: 16px;
`;

export const TextInputTime = styled.p`
font-size: 16px;
margin-bottom: 12px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 24px;
  border: 1px solid var(--secondaryDarkGrey);
  border-radius: 8px;
  padding: 10px;
  outline: none;
  color: #407BFF;
  font-size: 16px;
`;

export const AmountDiv = styled.div`
color: var(--primaryBlue);
font-family: 'Roboto-Bold';
border-radius: 40px;
`;

export const AmountWrap = styled.div`
display: flex;
gap: 16px;
flex-direction: column;
justify-content: center;
align-items: center;
@media (min-width: 768px){
  gap: 24px;
  flex-direction: row;
  justify-content: end;
  }
`;

export const MessageError = styled.div`
  color: var(--secondaryRed);
  font-family: 'Roboto-regular';
  margin-top: 4px;
  font-size: 14px;
`;

export const StyledDatePicker = styled(TimePicker)`
  width: 100%;
  margin-bottom: 24px;
  border: 1px solid var(--secondaryDarkGrey);
  border-radius: 8px;
  padding: 10px;
  outline: none;
`;