import styled from "styled-components";

export const WaterItem = styled.li`
   display: flex;
   height: 26px;
   width: 254px;
   padding: 12px 0;
   
   align-items: center;
   border-bottom: 1px solid #D7E3FF;

   gap: 12px;

`

export const WaterText = styled.p`
  font-size: 18px;
  line-height: 1.33;
  font-weight: 400;
  color: #407BFF;

`

export const TimeText = styled.p`
font-size: 12px;
  line-height: 2;
  font-weight: 400;
  color: #2F2F2F;
  

`

export const SvgPen = styled.svg`
width: 16px;
height: 16px;



`

export const SvgTrash = styled.svg`
width: 16px;
height: 16px;

`

export const ConfigIcons = styled.div`
display: flex;
margin-left: auto;
gap: 18px;
`

export const ButtonPen = styled.button`
   border: 0;
   background-color: inherit;
   margin: 0;
   padding: 0;
   position: relative;

   &::before {
  content: "";
    position: absolute;
  width: 16px;
  height: 1px;
  background-color: #9EBBFF;
  bottom: 1px;
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
   


   &::before {
  content: "";
    position: absolute;
  width: 16px;
  height: 1px;
  background-color: #EF5050;
  bottom: 1px;
  opacity: 0;
  transition: opacity 200ms ease-in;
}

&:hover {
  &::before {
    opacity: 1;
  }
}

`