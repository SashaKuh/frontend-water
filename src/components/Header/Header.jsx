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
import { useRef, useState } from 'react';
import { HeaderModal } from 'components/Header/HaderModal/HeaderModal';
import { SettingModal } from 'components/SettingModal/SettingModal';

export const Header = () => {
  const headerNode = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [settingModalIsOpen, setSettingModalIsOpen] = useState(false);

  const closeSettingModal = () => {
    setSettingModalIsOpen(false);
  };

  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const username = useSelector(state => state.auth.user.username);
  const avatar = useSelector(state => state.auth.user.avatarURL);

  const onClickUserLogo = e => {
    if (e.currentTarget.classList.contains('open')) {
      setModalIsOpen(false);
      return;
    }
    setModalIsOpen(true);
  };

  return (
    <HeaderContainer className="container-header" ref={headerNode}>
      <Link to="homepage">
        <img src={logo} alt="Logo tracker of water" />
      </Link>
      {isLoggedIn ? (
        <UserLogoWrapper>
          <UserLogo onClick={onClickUserLogo} className={modalIsOpen && 'open'}>
            <span>{username}</span>
            <img height="28" width="28" src={avatar} alt="User avatar" />
            <svg height="28" width="28">
              <use href={iconSprite + '#icon-chevron-double-up'}></use>
            </svg>
          </UserLogo>
          {modalIsOpen && (
            <HeaderModal
              settingModalIsOpen={settingModalIsOpen}
              setSettingModalIsOpen={setSettingModalIsOpen}
              setModalIsOpen={setModalIsOpen}
              headerNode={headerNode.current}
              contentLabel="User menu modal"
            ></HeaderModal>
          )}
          <SettingModal
            modalIsOpen={settingModalIsOpen}
            closeModal={closeSettingModal}
          />
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
