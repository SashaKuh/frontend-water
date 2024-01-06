import styled from "styled-components";


export const DayDetailsCont = styled.div`
position: absolute;
z-index: 100;
display: flex;
flex-direction: column;
gap: 16px;
box-shadow: 0px 4px 4px rgb(64, 123, 255, 0.3);
border-radius: 10px;

width: 100%;

height: 188px;
background-color: var(--primaryWhite);
padding: 24px 13px;

font-size: 16px;
line-height: 1.25;
font-weight: 400;

 @media screen and (min-width: 320px) {
        width: 280px;
        }
  
@media screen and (max-width: 767px) {
left: -2%;
transform: translateY(-106%);
        }

@media screen and (min-width: 768px) {
    width: 292px;
height: 188px;
padding: 24px 16px;
transform: translateY(-106%);
&.right {
right: -2%;
}

&.left {
left: -2%;
}

        }

`

export const DateText = styled.p`
color: var(--primaryBlue);
font-weight: 500;
font-size: 18px;
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

export const SvgClose = styled.svg`
width: 20px;
height: 20px;
fill: var(--primaryBlue);

/* right: 50%;
top: 50%;
transform: translate(-50%, -50%); */

`

export const CloseButton = styled.button`
/* width: 20px;
height: 20px; */
padding: 4px;
background-color: inherit;
border: 0;
position: absolute;
right: 17px;
top: 23px;
padding: 0;
margin: 0;
text-align: center;
transform: rotate(45deg);

`