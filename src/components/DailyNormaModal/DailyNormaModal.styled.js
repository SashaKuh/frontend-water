import ReactModal from 'react-modal';
import styled from 'styled-components';

export const ModalBackdrope = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const StyledReactModal = styled(ReactModal)`
  &.ReactModal__Overlay--after-open {
    border: none;
  }
`;

export const ModalWrap = styled.div`
background-color: var(--primaryWhite);
font-family: 'Roboto-regular';
color: var(--primaryBlack);
padding: 24px 12px;
border-radius: 10px;
position: relative;
font-size: 16px;
line-height: 1.2;
box-sizing: border-box;

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
`;

export const BtnSvg = styled.button`
position: absolute;
padding: 0;
top: 28px; 
right: 12px;
border: none;
background-color: var(--primaryWhite);

@media (min-width: 768px) and (max-width: 1439px){
    top: 36px; 
    right: 24px;
  }
`;

export const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledRadioLabel = styled.label`
  position: relative;
  cursor: pointer;
  margin-right: 24px;
`;

export const StyledRadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const StyledRadioCircle = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 1px solid #007BFF;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleColor = styled.div`
  background-color: ${(props) => (props.checked ? '#007BFF' : '#fff')};
  width: 6px;
  height: 6px;
  border-radius: 50%;
`;

export const StyledRadioText = styled.span`
  margin-left: 22px;
`;

export const TitleText = styled.div`
font-size: 26px;
font-family: 'Roboto-Medium';
line-height: 1.2;
margin-bottom: 24px;
`;

export const WrapFormulaText = styled.div`
display: flex;
gap: 16px;
flex-direction: column;
margin-bottom: 12px;

@media (min-width: 768px) and (max-width: 1439px){
    flex-direction: row;
    gap: 24px;
  }
`;

export const FormulaText = styled.span`
color: var(--primaryBlue);
font-size: 18px;
line-height: 1.2;
`;

export const WrapFormula = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--secondaryDarkGrey);
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 24px;
`;

export const AboutFormula = styled.p`
color: #8F8F8F;
font-size: 12px;
line-height: 1.35;
font-family: 'Roboto-regular';
box-sizing: border-box;
`;

export const AboutFormulaColor = styled.span`
color: var(--primaryBlue);
`;

export const Text = styled.h2`
font-size: 18px;
line-height: 1.1;
margin-bottom: 16px;
`;
export const TextInfo = styled.p`
margin-bottom: 8px;
margin-top: 16px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--secondaryDarkGrey);
  border-radius: 8px;
  padding: 10px;
  outline: none;
  color: #407BFF;
  font-size: 16px;
  &::placeholder {
    color: var(--primaryBlue);
    opacity: 1;
  }
`;

export const AmountText = styled.div`
display: flex;
margin-top: 16px;
margin-bottom: 24px;
align-items: center;
`;

export const AmountTextInfo = styled.p`
width: 190px;
@media (min-width: 768px){
  width: 328px;
  }
`;

export const AmountNumberInfo = styled.span`
margin-left: 6px;
color: var(--primaryBlue);
font-size: 18px;
font-family: 'Roboto-Bold';
line-height: 1.3;
`;

export const Button = styled.button`
margin-top: 24px;
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

@media (min-width: 768px) {
    display: block;
    width: 160px;
    height: 44px;
    margin-left: auto;
  }
`;