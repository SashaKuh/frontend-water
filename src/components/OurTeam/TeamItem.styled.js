import styled from "styled-components";

export const Image = styled.img`
border-radius: 50%;
`;

export const TeamWrap = styled.li`
    width: calc(50% - 10px);
    border: 2px solid var(--secondaryDarkGrey);
    border-radius: 10px;
    align-items: center;
    margin-bottom: 20px;
    display: flex;
    overflow: hidden;
    padding: 10px;
    gap: 20px;

    &:hover {         
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  }

    @media  (max-width: 767px){
    width: 260px;
  }
 `;

export const ImgWrap = styled.div`
width: 94px;
height: 94px;
`;

export const Svg = styled.svg`
fill: var(--primaryBlue);
transition: color 250ms linear;
&:hover {
    fill: var(--secondaryOrange);
  }
`;

export const TeamSocial = styled.div`
display: flex;
gap: 10px;
align-items: center;
margin-top: 12px;
`;

export const TextName = styled.p`
font-size: 16px;
font-family: 'Roboto-Medium';
line-height: 1.3;
`;