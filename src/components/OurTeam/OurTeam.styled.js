import styled from "styled-components";

export const Button = styled.button`
position: fixed;
display: flex;
align-items: center;
justify-content: center;
padding: 8px;
width: 50px;
height: 50px;
bottom: 10px;
right: 10px; 
background-color: var(--primaryBlue);
color: var(--primaryWhite);
border-radius: 50%;
z-index: 3;
border: none;
font-size: 14px;
font-family: 'Roboto-Medium';
line-height: 1.3;
box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
  &:hover {
    box-shadow: 1px 1px 15px 6px rgba(64, 123, 255, 0.54);
  }

  &:focus {
    box-shadow: none;
    outline: none;
  }

  @media (min-width: 320px) and (max-width: 767px){
    width: 40px;
    height: 40px;
    font-size: 12px;
  }
`;

