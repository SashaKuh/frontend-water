import styled from 'styled-components';

import bg_desk_1x from '../../../../../src/images/PNG/images-desktop/bg_desk_1x.png';
import bg_desk_2x from '../../../../../src/images/PNG/images-desktop/Optimized/bg_desk_2x.png';
import bg_tabl_1x from '../../../../../src/images/PNG/images-tablet/bg_tabl_1x.png';
import bg_tabl_2x from '../../../../../src/images/PNG/images-tablet/Optimized/bg_tabl_2x.png';
import bg_mob_1x from '../../../../../src/images/PNG/images-mobile/bg_mob_1x.png';
import bg_mob_2x from '../../../../../src/images/PNG/images-mobile/Optimized/bg_mob_2x.png';

export const HomeStyledLayout = styled.section`
  min-height: calc(100vh - 119px);
  background-image: url(${bg_mob_1x});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${bg_mob_2x});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    min-height: calc(100vh - 143px);
    background-image: url(${bg_tabl_1x});
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${bg_tabl_2x});
  }

  @media screen and (min-width: 1440px) {
    min-height: calc(100vh - 121px);
    padding-top: 40px;
    background-image: url(${bg_desk_1x});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${bg_desk_2x});
  }
`;
