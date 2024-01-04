import styled from 'styled-components';

import bg_main_page from '../../images/PNG/images-mobile/bg_main_page.png';
import bg_tabl from '../../images/PNG/images-tablet/bg_main_page.png';
import bg_desk from '../../images/PNG/images-desktop/bg_main_page.png';

export const Tracker = styled.div`
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: center;
    padding: 109px 80px 0 86px;
  }
`;

export const WellcomeLayout = styled.section`
  height: 100vh;
  background-image: url(${bg_main_page});
  background-size: cover;
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: 100%;

  @media screen and (min-width: 768px) {
    background-image: url(${bg_tabl});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bg_desk});
  }
`;
