import sprite from '../../images/SVG/symbol-defs.svg';
import {
  BtnSvg,
  ReactModalStyled,
  SvgClose,
  Title,
  WrapHeader,
} from './DeleteModal.styled';

export const DeleteModal = ({
  titleText,
  isOpen,
  onRequestClose,
  children,
}) => {
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
        <BtnSvg type="button" onClick={onRequestClose}>
          <SvgClose>
            <use xlinkHref={`${sprite}#icon-plus-small`} />
          </SvgClose>
        </BtnSvg>
      </WrapHeader>
      {children}
    </ReactModalStyled>
  );
};
