import sprite from '../../images/SVG/symbol-defs.svg';
import {
  ReactModalStyled,
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
        <button  className="cross-btn" type="button" onClick={onRequestClose}>
          <svg className='cross-svg'>
            <use xlinkHref={`${sprite}#icon-plus-small`} />
          </svg>
        </button>
      </WrapHeader>
      {children}
    </ReactModalStyled>
  );
};
