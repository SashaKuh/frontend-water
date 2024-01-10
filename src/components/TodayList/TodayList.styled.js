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
  display: flex;
  padding-top: 12px;
  border: 0;
  background-color: inherit;
  font-size: 18px;
  line-height: 1.25;
  color: var(--primaryBlue);
  font-weight: 500;
  transition: color 0ms linear;
  align-items: center;
  &:hover {
    color: var(--secondaryOrange);
  }

  & span {
    color: transparent;
    overflow: hidden;
    background: linear-gradient(
      90deg,
      var(--secondaryOrange) 0%,
      var(--secondaryOrange) 50%,
      var(--primaryBlue) 50%,
      var(--primaryBlue) 100%
    );
    background-size: 200% 100%;
    background-position: 100%;
    -webkit-background-clip: text;
    background-clip: text;
    transition: background-position var(--animationCubicBezier);
  }

  &:hover {
    & span {
      background-position: 0 100%;
    }
  }

  @media screen and (min-width: 320px) {
    width: 111px;
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    width: 129px;
    font-size: 18px;
  }
`;

export const SvgPlus = styled.svg`
width: 16px;
height: 16px;
margin-right: 8px;
stroke: currentColor;
fill: currentColor;

@media screen and (min-width: 768px) {
       width: 24px;
height: 24px;
        }

    @media screen and (min-width: 1440px) {
        width: 24px;
height: 24px;
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
