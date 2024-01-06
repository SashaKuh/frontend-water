import styled from "styled-components";

export const MonthItemStyled = styled.div`
width: 32px;


@media screen and (min-width: 768px) {
   width: 34px;
        }

`

export const DayButtonFull = styled.button`
font-size: 14px;
line-height: 1.29;
text-align: center;
width: 32px;
height: 32px;
background-color: var(--primaryWhite);
padding: 7px 6px;
border: 0;
border-radius: 20px;
border-color: var(--primaryWhite);
margin-bottom: 4px;
transition: background-color 200ms linear;

&:is(:hover, :focus) {
        background-color: var(--secondaryBlue);
        outline: inherit;
}
  
   @media screen and (min-width: 768px) {
    width: 34px;
height: 34px;
    font-size: 16px;
line-height: 1.25;
padding: 7px;
        }

`

export const DayButtonPart = styled.button`
font-size: 14px;
line-height: 1.29;
text-align: center;
width: 32px;
height: 32px;
background-color: var(--primaryWhite);
padding: 7px 6px;
border: 1px solid var(--secondaryOrange);
border-radius: 20px;
margin-bottom: 4px;
transition: background-color 200ms linear;

&:is(:hover, :focus) {
        background-color: var(--secondaryOrange);
        outline: inherit;
}

  
   @media screen and (min-width: 768px) {
    width: 34px;
height: 34px;
   font-size: 16px;
line-height: 1.25;
padding: 7px;
        }

`

export const DayCompleted = styled.p`
   font-size: 10px;
   line-height: 1.6;
   color: var(--secondaryBlue);
   text-align: center;
   padding: 0;

   @media screen and (min-width: 768px) {
   font-size: 13px;
line-height: 1.54;
        }
`