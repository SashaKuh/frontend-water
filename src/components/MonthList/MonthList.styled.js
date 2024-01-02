import styled from "styled-components";


export const MonthTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
 
`

export const DatePicker = styled.div`
  display: flex;
  color: #407BFF;
  align-items: center;
`

export const SvgLeft = styled.svg`
width: 14px;
height: 14px;
transform: rotate(90deg);
`

export const SvgRight = styled.svg`
width: 14px;
height: 14px;
transform: rotate(-90deg);
`

export const LeftArrowButton = styled.button`
border: 0;
background-color: inherit;
padding: 1px;
padding-right: 12px;
color: inherit;
fill: currentColor;

`

export const RigthArrowButton = styled.button`
border: 0;
background-color: inherit;
padding: 1px;
padding-left: 12px;
color: inherit;
fill: currentColor;


&:disabled {
  color: #ECF2FF;
}
`

export const MonthHeader = styled.div`
display: flex;

justify-content: space-around;
`

