import styled from "styled-components";
import { Link } from 'react-router-dom';

export const TodayListContainer = styled.div`
/* padding-top: 24px;
padding-left: 8px;
padding-right: 8px; */
`

export const TodayTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
`

export const AddLink = styled(Link)`
background-color: inherit;
text-decoration: none;
font-size: 16px;
line-height: 1.25;
color: #407BFF;
font-weight: 500;
`

export const Svg = styled.svg`
width: 8px;
height: 8px;
margin-right: 8px;
`

export const WaterList = styled.ul`
display: flex;
flex-direction: column;
   list-style: none;
   margin: 0;
padding: 0;
height: 212px;
overflow-y: scroll;


&::-webkit-scrollbar {
  width: 4px; 
 
}

&::-webkit-scrollbar-thumb {
   width: 4px;
  height: 100px;
  background-color: #9EBBFF;
  border-radius: 8px; 
    
}

`
