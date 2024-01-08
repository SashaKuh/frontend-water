import styled from "styled-components";




export const TodayListContainer = styled.div`
margin-bottom: 24px;

  @media screen and (min-width: 320px) {
       width: 264px;
        }

        @media screen and (min-width: 768px) {
        width: 656px;
        }

    @media screen and (min-width: 1440px) {
        width: 544px;
    }
`

export const TodayTitle = styled.h3`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.25;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
        font-size: 26px
        }

    @media screen and (min-width: 1440px) {
       
    }
`

export const AddLink = styled.button`
display: inline-block;
padding: 12px 0;
border: 0;
background-color: inherit;
font-size: 16px;
line-height: 1.25;
color: var(--primaryBlue);
font-weight: 500;
transition: color 250ms linear;


&:hover {
  color: var(--secondaryOrange);
}

@media screen and (min-width: 320px) {
       width: 97px;
        }

        @media screen and (min-width: 768px) {
        width: 114px;
        }
`

export const SvgPlus = styled.svg`
width: 8px;
height: 8px;
margin-right: 8px;
stroke: currentColor;
fill: currentColor;

@media screen and (min-width: 768px) {
       width: 12px;
height: 12px;
        }

    @media screen and (min-width: 1440px) {
        width: 12px;
height: 12px;
    }


`

export const WaterList = styled.ul`
display: flex;
flex-direction: column;
   list-style: none;
   margin: 0;
padding: 0;
height: 212px;
overflow-y: scroll;
overflow-x: hidden;





&::-webkit-scrollbar {
  width: 4px; 
 
}

&::-webkit-scrollbar-track {
  /* width: 2px; */
  background-color: var(--secondaryDarkGrey);
 border: 1px solid transparent;
    background-clip: content-box;
}

&::-webkit-scrollbar-thumb {
  height: 100px;
  background-color: var(--secondaryBlue);
  border-radius: 8px; 
}






`
