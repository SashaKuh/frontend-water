import styled from "styled-components";

export const Wrap = styled.div` 
  display: inline-block;
  border-radius: 10px;
  border: 1px solid var(--secondaryGrey);
  background: rgb(255, 255, 255);
  box-shadow: 0 4px 8px 0 rgba(158, 187, 255, 0.12);
  padding: 8px 20px;
  margin-bottom: 8px;
  position:static;

@media (min-width: 768px){
position:absolute;    
height: 76px;
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
span {
    color: transparent;
    overflow: hidden;

    background: linear-gradient(
      90deg,
      var(--secondaryOrange) 0%,
      var(--secondaryOrange) 50%,
      var(--primaryBlue) 50%,
      var(--primaryBlue) 100%
    );

    background-size: 200% 100%;
    background-position: 100%;

    -webkit-background-clip: text;
    background-clip: text;

    transition: background-position var(--animationCubicBezier);
  }

  &:hover {
    & span {
      background-position: 0 100%;
    }
  }
`;

export const BtnWrap = styled.div`
display: flex;
gap: 12px;
align-items: baseline;
`