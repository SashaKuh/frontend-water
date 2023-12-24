import styled from "styled-components";

export const Wrap = styled.div`
padding-left: 20px;
padding-top: 8px;
width: 164px;
height: 76px;
border-radius: 10px;
border: 1px solid var(--secondaryGrey);
box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);
font-family: 'Roboto-regular';

@media (min-width: 320px) and (max-width: 767px){
    height: 74px;
  }
`;

export const Text = styled.p`
margin-bottom: 12px;
font-size: 18px;
font-family: 'Roboto-Medium';
line-height: 1.3;
color: var(--primaryBlack);
`;

export const TextWater = styled.p`
font-size: 24px;
font-family: 'Roboto-Bold';
line-height: 1;
color: var(--primaryBlue);
`;

export const Button = styled.button`
padding: 0;
font-size: 16px;
font-family: 'Roboto-regular';
line-height: 1.3;
color: #8BAEFF;
border: none;
background-color:var(--primaryWhite);
outline: none;
`;

export const BtnWrap = styled.div`
display: flex;
gap: 12px;
align-items: baseline;
`