import React, { useState } from 'react';
import iconSprite from '../../images/SVG/symbol-defs.svg';
import {
  DailyNormaContainer,
  DailyNormaTitle,
  DailyNormaValue,
  DailyNormaButton,
  ImgTumb,
  StyledRangeInput,
  RangeAndAddWater,
  RangeDiv,
  RangeTitle,
  PercentageOfRange,
  BoldPercentageOfRange,
  PercentageDiv,
  ButtonAddWater,
  SvgButton,
  WrapHomePage,
} from './HomePage.styled';
import bottleMobile from '../../images/PNG/images-mobile/btl_home_screen.png';
import bottleTablet from '../../images/PNG/images-tablet/btl_home_screen.png';
import bottleDesktop from '../../images/PNG/images-desktop/btl_home_screen.png';
import { DailyNorma } from 'components/DailyNorma/DailyNorma';
const value = 1.5;
const HomePage = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleChange = event => {
    const value = event.target.value;
    setSliderValue(value);
  };

  const progress = (sliderValue / 100) * 100;

  const sliderStyle = {
    background: `linear-gradient(to right, #9EBBFF ${progress}%, #D7E3FF ${progress}%)`,
  };
  return (
    <WrapHomePage>
      <DailyNorma />
      <ImgTumb>
        <img
          src={bottleMobile}
          srcSet={`
          ${bottleMobile} 320w,
          ${bottleTablet} 768w,
          ${bottleDesktop} 1400w
        `.trim()}
          sizes="(min-width: 1441px) 1440px,
               (min-width: 769px) 768px,
               320px"
          alt="bottle"
        />
      </ImgTumb>
      <RangeAndAddWater>
        <RangeDiv>
          <RangeTitle>Today</RangeTitle>
          <StyledRangeInput
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={handleChange}
            style={sliderStyle}
          ></StyledRangeInput>
          <PercentageDiv>
            <PercentageOfRange>0%</PercentageOfRange>
            <PercentageOfRange>
              <BoldPercentageOfRange>50%</BoldPercentageOfRange>
            </PercentageOfRange>
            <PercentageOfRange>100%</PercentageOfRange>
          </PercentageDiv>
        </RangeDiv>
        <ButtonAddWater>
          <SvgButton>
            <use href={iconSprite + '#icon-plus-circle'} />
          </SvgButton>
          Add Water
        </ButtonAddWater>
      </RangeAndAddWater>
    </WrapHomePage>
  );
};
export default HomePage;
