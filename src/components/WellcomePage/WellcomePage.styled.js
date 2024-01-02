import styled from 'styled-components';

import bg_main_page from '../../images/PNG/images-mobile/bg_main_page.png';
import bg_tabl_1x from '../../images/PNG/images-tablet/bg_main_page.png';
import bg_tabl_2x from '../../images/PNG/images-tablet/bg_main_page.png';
import bg_desk_1x from '../../images/PNG/images-desktop/bg_main_page.png';
import bg_desk_2x from '../../images/PNG/images-desktop/bg_main_page.png';

export const Tracker = styled.div`
  @media screen and (max-width: 767px) {
    padding-bottom: 40px;
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    padding-top: 109px;
    padding-left: 86px;
    padding-right: 80px;
  }
`;

export const WellcomeLayout = styled.section`
  min-height: 100vh;
  background-image: url(${bg_main_page});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2),
    (max-width: 767px) and (min-resolution: 192dpi) {
    background-image: url(${bg_main_page});
  }

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    background-image: url(${bg_tabl_1x});
  }

  @media screen and (min-width: 768px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 768px) and (min-resolution: 192dpi) {
    background-image: url(${bg_tabl_2x});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bg_desk_1x});
  }

  @media screen and (min-width: 1440px) and (-webkit-min-device-pixel-ratio: 2),
    (min-width: 1440px) and (min-resolution: 192dpi) {
    background-image: url(${bg_desk_2x});
  }
`;
