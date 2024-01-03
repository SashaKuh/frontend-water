import sprite from '../../images/SVG/symbol-defs.svg';
import {
  BtnSvg,
  ReactModalStyled,
  SvgClose,
  Title,
  WrapHeader,
} from './Modal.styled';

export const Modal = ({ titleText, isOpen, onRequestClose }) => {
  return (
    <ReactModalStyled
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
        },
      }}
    >
      <WrapHeader>
        <Title>{titleText}</Title>
        <BtnSvg type="button" onClick={console.log('close')}>
          <SvgClose>
            <use xlinkHref={`${sprite}#icon-plus-small`} />
          </SvgClose>
        </BtnSvg>
      </WrapHeader>
    </ReactModalStyled>
  );
};
