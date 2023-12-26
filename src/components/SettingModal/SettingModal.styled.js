import ReactModal from 'react-modal';
import styled from 'styled-components';

export const StModalBackdrope = styled.div`
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

export const StyledSettingModal = styled(ReactModal)`
  &.ReactModal__Overlay--after-open {
    border: none;
  }
`;

export const StModalWrap = styled.div`
background-color: var(--primaryWhite);
font-family: 'Roboto-regular';
color: var(--primaryBlack);
padding: 32px 12px;
border-radius: 10px;
position: relative;
font-size: 16px;
line-height: 1.2;
box-sizing: border-box;

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
`;

export const Title = styled.h1`
font-family: 'Roboto-Medium';
font-size: 26px;
line-height: 1.2;
`;