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

export const ModalWrap = styled.div`
background-color: #FFFFFF;
padding: 24px 12px;
position: relative;

@media (min-width: 1440px) {
    height: 712px;
    width: 592px;
    padding: 32px 24px;
  }

@media (min-width: 768px) and (max-width: 1439px){
    height: 676px;
    width: 704px;
    padding: 32px 24px;
  }
@media (min-width: 320px) and (max-width: 767px){
    height: 816px;
    width: 260px;
  }

`;

export const BtnSvg = styled.button`
position: absolute;
padding: 0;
top: 28px; 
right: 12px;
border: none;
background-color: #FFFFFF;
@media (min-width: 1440px) {
    top: 36px; 
    right: 24px;
  }

@media (min-width: 768px) and (max-width: 1439px){
    top: 36px; 
    right: 24px;
  }
`;
