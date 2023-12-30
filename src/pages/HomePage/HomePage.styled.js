import styled from 'styled-components';

export const ImgTumb = styled.div`
 margin-bottom: 16px;
    width: 280px; 
    height: 208px;
    margin-left:auto;
    margin-right:auto;
    z-index: -1;
    position: relative;

    img {
        width: 100%;
        height: auto;
    }


    @media (min-width: 768px) {
        width: 518px;
        height: 386px;
        // position: relative;
    }

    @media (min-width: 1440px) {
        width: 738px;
        height: 548px;
        margin-bottom: 24px;
        img{
          position: relative;
          left:-50px;

        }
    }
`;
export const StyledRangeInput = styled.input`

  -webkit-appearance: none;
  appearance: none; 
  width: 258px;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  margin-bottom:16px;
  margin-left:9px;
  margin-right:13px;
  display:block;
  height: 8px;
  background: var(--secondaryDarkGrey);
@media (min-width:768px){
  width:334px;
  // margin-left:1px;
  // margin-right:17px;
}
@media (min-width:1440px){
  width:360px;
}

/* Thumb: webkit */
&::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none; 
  height: 14px;
  width: 14px;
  background-color: var(--primaryWhite);
  border-radius: 50%;
  border: 1px solid var(--primaryBlue);

}

/* Thumb: Firefox */
&::-moz-range-thumb {
  height: 14px;
  width: 14px;
  background-color: var(--primaryWhite);
  border-radius: 50%;
  border: 1px solid var(--primaryBlue);
}
`

export const RangeAndAddWater = styled.div`
display:flex;
flex-wrap:wrap;
gap: 16px; 
justify-content:space-between;
margin-bottom: 40px;
@media (min-width: 768px) {
        flex-wrap:nowrap;
        gap:24px;
        align-items: center; 
    }
@media (min-width: 1440px){
    gap:28px;
    margin-bottom: 0px;
}
`;

export const RangeDiv = styled.div`
width:280px;
@media (min-width:768px){
  width:356px;
}
@media (min-width:768px){
  width:391px;
}


`;

export const RangeTitle = styled.p`
font-size: 18px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
margin-bottom: 8px;
color:var(--primaryBlue);
@media (min-width: 768px) {
        margin-bottom: 8px;
    }
`;
export const PercentageOfRange = styled.div`
  position: relative;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  color:var(--primaryBlue);
&::before {
    content: "";
    position: absolute;
    top: -8px; 
    left: 50%;
    width: 1px;
    height: 8px;
    background-color: var(--secondaryDarkGrey); 
  }
`;
export const BoldPercentageOfRange = styled.p`
font-weight: 500;
font-size:16px;
line-height: 20px;
letter-spacing: 0em;



`;
export const PercentageDiv = styled.div`
display:flex;
justify-content:space-between;
flex-basis:auto;


`
export const ButtonAddWater = styled.button`
width:280px;
height:36px;
padding: 6px 76px 6px 76px;
border-radius: 10px;
display:flex;
 justify-content: center;
  align-items: center;  
font-size: 16px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: center;
cursor: pointer; 
border:none;
background-color:var(--primaryBlue);
color:var(--primaryWhite);
box-shadow: 0px 4px 8px 0px #407BFF57;

@media (min-width: 768px) {
font-size: 18px;
font-weight: 500;
line-height: 24px;
padding: 8px 90px 8px 90px;
width:336px;
height:44px;
    }

@media (min-width: 1440px) {
width:182px;
padding:10px 29px 10px 29px;
    }
    
`
export const SvgButton = styled.svg`
width:24px;
height:24px;
margin-right:10px;
stroke: var(--primaryWhite);   
  stroke-width: 2; 
`
export const LeftSideDiv = styled.div`
@media (min-width: 1440px){
  // margin-right:30px;
  width:592px;
}
`
export const AllSidesDiv = styled.div`
@media (min-width: 1440px){
display: flex;
gap:32px;
}
`