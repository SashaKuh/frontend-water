import styled from "styled-components";


export const DayDetailsCont = styled.div`
display: flex;
flex-direction: column;
gap: 16px;
box-shadow: 0px 4px 4px rgb(64, 123, 255, 0.3);
border-radius: 10px;

width: 280px;
height: 188px;
background-color: var(--primaryWhite);
padding: 24px 13px;

font-size: 16px;
line-height: 1.25;
font-weight: 400;


@media screen and (min-width: 768px) {
    width: 292px;
height: 188px;
padding: 24px 16px;

        }

    /* @media screen and (min-width: 1440px) {
  
    } */
    
`

export const DateText = styled.p`
color: var(--primaryBlue);
`

export const OtherText = styled.p`

color: var(--primaryBlack);
`

export const ValueSpan = styled.span`
vertical-align: middle;
color: var(--primaryBlue);
font-size: 18px;
line-height: 1.33;
font-weight: 500;

`