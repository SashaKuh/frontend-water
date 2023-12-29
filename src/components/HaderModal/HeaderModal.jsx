import { HeaderModalStyled } from './HeaderModal.styled';
import iconSprite from '../../images/SVG/symbol-defs.svg';

export const HeaderModal = ({ setModalIsOpen }) => {
  return (
    <HeaderModalStyled>
      <ul>
        <li>
          <button type="button" onClick={() => setModalIsOpen(false)}>
            <svg width="16" height="16">
              <use href={iconSprite + '#icon-cog-6-tooth'}></use>
            </svg>
            <span>Setting</span>
          </button>
        </li>
        <li>
          <button type="button" onClick={() => setModalIsOpen(false)}>
            <svg width="16" height="16">
              <use href={iconSprite + '#icon-arrow-right-on-rectangle'}></use>
            </svg>
            <span>Log out</span>
          </button>
        </li>
      </ul>
    </HeaderModalStyled>
  );
};
