import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import iconSprite from '../../images/SVG/symbol-defs.svg';
import { useSelector } from 'react-redux';
import {
  UserAuth,
  HeaderContainer,
  UserLogo,
  UserLogoWrapper,
} from './Header.styled';
import { useState } from 'react';
import { HeaderModal } from 'components/HaderModal/HeaderModal';

export const Header = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const navigate = useNavigate();
  let isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const username = useSelector(state => state.auth.user.username);
  const avatar = useSelector(state => state.auth.avatar);

  isLoggedIn = true;

  const onClickUserLogo = e => {
    if (e.currentTarget.classList.contains('open')) {
      setModalIsOpen(false);
      return;
    }
    setModalIsOpen(true);
  };

  return (
    <HeaderContainer className="container">
      <Link to="homepage">
        <img src={logo} alt="Logo tracker of water" />
      </Link>
      {isLoggedIn ? (
        <UserLogoWrapper>
          <UserLogo onClick={onClickUserLogo} className={modalIsOpen && 'open'}>
            <span>{username || '83213829654652288028731080252373'}</span>
            <img
              height="28"
              width="28"
              src={
                avatar ||
                'https://s.gravatar.com/avatar/8f175290e672fb87ec57c5e10a6e804e?s=250&r=g&d=retro'
              }
              alt="User avatar"
            />
            <svg height="28" width="28">
              <use href={iconSprite + '#icon-chevron-double-up'}></use>
            </svg>
          </UserLogo>
          {modalIsOpen && (
            <HeaderModal
              setModalIsOpen={setModalIsOpen}
              contentLabel="User menu modal"
            ></HeaderModal>
          )}
        </UserLogoWrapper>
      ) : (
        <UserAuth onClick={() => navigate('/signin')}>
          <span>Sign in</span>
          <svg height="28" width="28">
            <use href={iconSprite + '#icon-user'}></use>
          </svg>
        </UserAuth>
      )}
    </HeaderContainer>
  );
};
