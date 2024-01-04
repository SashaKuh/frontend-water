import React, { useState } from 'react';
import iconSprite from '../../../images/SVG/symbol-defs.svg';
import {
  RangeAndAddWater,
  RangeDiv,
  RangeTitle,
  StyledRangeInput,
  PercentageDiv,
  PercentageOfRange,
  BoldPercentageOfRange,
  ButtonAddWater,
  SvgButton,
} from '../../../pages/HomePage/HomePage.styled';
import { TodayListModal } from 'components/TodayListModal/TodayListModal';
export const WaterRatioPanel = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleChange = event => {
    const value = event.target.value;
    setSliderValue(value);
  };

  const progress = (sliderValue / 100) * 100;

  const sliderStyle = {
    background: `linear-gradient(to right, #9EBBFF ${progress}%, #D7E3FF ${progress}%)`,
  };

  const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
  }
  
  return (
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
      <ButtonAddWater onClick={openModal}>
        <SvgButton>
          <use href={iconSprite + '#icon-plus-circle'} />
        </SvgButton>
        Add Water
      </ButtonAddWater>
      <TodayListModal modalIsOpen={modalIsOpen} closeModal={closeModal}/>
    </RangeAndAddWater>
  );
};
