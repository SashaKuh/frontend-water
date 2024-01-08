import ReactModal from "react-modal";
import styled from "styled-components";

export const StyledModal = styled(ReactModal)`
position: fixed;
bottom: 30px;
right: 30px;
background-color: var(--primaryWhite);
color: var(--primaryBlack);
padding: 24px 12px;
border-radius: 10px;
font-size: 16px;
line-height: 1.1;
box-sizing: border-box;
overflow: auto;
width: 280px;
max-height: 80%;
border: 2px solid var(--secondaryDarkGrey);

@media (min-width: 1440px) {
    width: 540px;
    padding: 32px 24px;
  }

@media (min-width: 768px) and (max-width: 1439px){
    width: 540px;
    padding: 32px 24px;
  }
@media (min-width: 320px) and (max-width: 767px){
    width: 260px;
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
@media (min-width: 768px) and (max-width: 1439px){
    top: 36px; 
    right: 24px;
  }
`;

export const WrapHeader = styled.div`
display: flex;
justify-content: space-between;
`;

export const WrapTeam = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 0;
`;