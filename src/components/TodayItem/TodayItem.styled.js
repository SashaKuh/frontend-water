import styled from "styled-components";

export const WaterItem = styled.li`
   display: flex;
   height: 50px;
   width: 100%;
   padding: 12px 0;
   align-items: center;
   border-bottom: 1px solid var(--secondaryDarkGrey);
 
 

   @media screen and (min-width: 320px) {
       width: 254px;
        }

        @media screen and (min-width: 768px) {
        width: 646px;
        }

    @media screen and (min-width: 1440px) {
        width: 534px;
    }

`

export const CupIcon = styled.svg`
   width: 17px;
   height: 22px;
   fill: var(--primaryBlue);

  @media screen and (min-width: 768px) {
       width: 23px;
   height: 30px;
        }



`

export const WaterText = styled.p`
  font-size: 18px;
  line-height: 1.33;
  font-weight: 400;
  color: var(--primaryBlue);
  margin-left: 12px;

`

export const TimeText = styled.p`
font-size: 12px;
  line-height: 2;
  font-weight: 400;
  color: var(--primaryBlack);
  margin-left: 12px;

   @media screen and (min-width: 768px) {
       margin-left: 16px;
        }

`

export const SvgPen = styled.svg`
width: 16px;
height: 16px;
fill: currentColor;



`

export const SvgTrash = styled.svg`
width: 16px;
height: 16px;
fill: currentColor;
`

export const ConfigIcons = styled.div`
display: flex;
width: 50px;
margin-left: auto;
gap: 18px;
`

export const ButtonPen = styled.button`
   border: 0;
   background-color: inherit;
   margin: 0;
   padding: 0;
   position: relative;
   color: var(--secondaryBlue);
   width: 16px;
height: 16px;

   &::before {
  content: "";
    position: absolute;
  width: 16px;
  height: 1px;
  background-color: var(--secondaryBlue);
  bottom: -3px;
  opacity: 0;
  transition: opacity 200ms ease-in;
}

&:hover {
  &::before {
    opacity: 1;
  }
}

`

export const ButtonTrash = styled.button`
   border: 0;
   background-color: inherit;
   margin: 0;
   padding: 0;
   position: relative;
   color: var(--secondaryRed);
   width: 16px;
height: 16px;


   &::before {
  content: "";
    position: absolute;
  width: 16px;
  height: 1px;
  background-color: var(--secondaryRed);
  bottom: -3px;
  opacity: 0;
  transition: opacity 200ms ease-in;
}

&:hover {
  &::before {
    opacity: 1;
  }
}

`