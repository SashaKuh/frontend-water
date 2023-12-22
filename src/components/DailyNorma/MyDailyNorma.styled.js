import styled from "styled-components";

export const Wrap = styled.div`
padding-left: 20px;
padding-top: 8px;
width: 164px;
height: 76px;
border-radius: 10px;
border: 1px solid #ECF2FF;
box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);
font-family: 'Roboto', sans-serif;

@media (min-width: 1440px) {
    /* height: 76px; */
  }

@media (min-width: 768px) and (max-width: 1439px){
    /* height: 76px; */
  }
@media (min-width: 320px) and (max-width: 767px){
    height: 74px;
  }
`;

export const Text = styled.p`
margin-bottom: 12px;
font-size: 18px;
font-weight: 600;
line-height: 1.3;
color: #2F2F2F;
`;

export const TextWater = styled.p`
font-size: 24px;
font-weight: 700;
line-height: 1;
color: #407BFF;
`;

export const Button = styled.button`
padding: 0;
font-size: 16px;
font-weight: 400;
line-height: 1.3;
color: #8BAEFF;
border: none;
background-color:#FFFFFF;
outline: none;
`;

export const BtnWrap = styled.div`
display: flex;
gap: 12px;
align-items: baseline;
`