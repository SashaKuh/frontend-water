import styled from "styled-components";

export const Image = styled.img`
border-radius: 50%;
`;

export const TeamWrap = styled.li`
    width: calc(30% - 10px);
    border: 2px solid var(--secondaryDarkGrey);
    border-radius: 10px;
    align-items: center;
    margin-bottom: 20px;
    display: flex;
    overflow: hidden;
    padding: 10px;
    gap: 12px;
    flex-direction: column;

    &:hover {         
    box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
  }

    @media  (max-width: 767px){
    width: 260px;
  }
 `;

export const ImgWrap = styled.div`
width: 80px;
height: 80px;
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
justify-content: center;
margin-top: 8px;
`;

export const TextName = styled.p`
font-size: 16px;
font-family: 'Roboto-Medium';
line-height: 1.3;
`;