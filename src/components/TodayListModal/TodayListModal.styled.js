import ReactModal from 'react-modal';
import styled from 'styled-components';

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
    width: 1008px;
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
padding: 0;
width: 36px;
height: 36px;
border: none;
background-color: var(--primaryWhite);

@media (min-width: 768px) and (max-width: 1439px){
    top: 36px; 
    right: 24px;
  }
`;

export const SvgClose = styled.svg`
fill: var(--primaryBlue);
transform: rotate(45deg); 
width: 36px;
height: 36px;
`;

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
align-items: center;
gap: 7px;
`;