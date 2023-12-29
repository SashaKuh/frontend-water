import { HeaderModalStyled } from './HeaderModal.styled';
import iconSprite from '../../images/SVG/symbol-defs.svg';
import { useCallback, useEffect, useRef } from 'react';

export const HeaderModal = ({ setModalIsOpen, headerNode }) => {
  const node = useRef();

  const onClickSettings = () => setModalIsOpen(false);
  const onClickLogout = () => setModalIsOpen(false);

  const handleClickOutside = useCallback(
    event => {
      if (
        node.current &&
        !node.current.contains(event.target) &&
        !headerNode.contains(event.target)
      ) {
        setModalIsOpen(false);
      } else {
        setModalIsOpen(true);
      }
    },
    [setModalIsOpen, headerNode]
  );

  const handleEscPress = useCallback(
    e => {
      if (
        e.code.toLowerCase() === 'escape' ||
        e.code.toLowerCase() === 'backspace'
      )
        setModalIsOpen(false);
    },
    [setModalIsOpen]
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscPress);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscPress);
    };
  }, [handleClickOutside, handleEscPress]);

  return (
    <HeaderModalStyled ref={node}>
      <ul>
        <li>
          <button type="button" onClick={onClickSettings}>
            <svg width="16" height="16">
              <use href={iconSprite + '#icon-cog-6-tooth'}></use>
            </svg>
            <span>Setting</span>
          </button>
        </li>
        <li>
          <button type="button" onClick={onClickLogout}>
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
