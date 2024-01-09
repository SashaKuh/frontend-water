import { ImgTumb } from '../../../pages/HomePage/HomePage.styled';
import bottleMobile from '../../../images/PNG/images-mobile/btl_home_screen.png';
import bottleTablet from '../../../images/PNG/images-tablet/btl_home_screen.png';
import bottleDesktop from '../../../images/PNG/images-desktop/btl_home_screen.png';

export const ImageOfBottle = () => {
  return (
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
              (max-width: 320px) 100vw
"
        alt="bottle"
      />
    </ImgTumb>
  );
};
