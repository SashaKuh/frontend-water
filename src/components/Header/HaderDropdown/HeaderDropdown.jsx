import { HeaderDropdownStyled } from './HeaderDropdown.styled';
import iconSprite from '../../../images/SVG/symbol-defs.svg';
import { useCallback, useEffect, useRef } from 'react';

export const HeaderDropdown = ({
  setModalIsOpen,
  headerNode,
  setSettingModalIsOpen,
  setLogoutModal,
}) => {
  const node = useRef();

  const onClickSettings = () => {
    setSettingModalIsOpen(true);
    setModalIsOpen(false);
  };

  const onClickLogout = async () => {
    setLogoutModal(true);
    setModalIsOpen(false);
  };

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
    <HeaderDropdownStyled ref={node}>
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
    </HeaderDropdownStyled>
  );
};
