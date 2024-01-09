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
width: 200px;
max-height: 80%;
border: 2px solid var(--secondaryDarkGrey);
&::-webkit-scrollbar {
  width: 4px; 
}
&::-webkit-scrollbar-thumb {
  width: 1px;
  height: 100px;
  background-color: var(--secondaryBlue);
  border-radius: 10px; 
}

@media (min-width: 1440px) {
    width: 640px;
  }

@media (min-width: 768px) and (max-width: 1439px){
    width: 640px;
    padding: 32px 24px;
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