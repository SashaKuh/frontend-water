import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import logo from '../../images/Logo.svg';
import iconSprite from '../../images/SVG/symbol-defs.svg';
import {
  UserAuth,
  HeaderContainer,
  UserLogo,
  UserLogoWrapper,
} from './Header.styled';
import { HeaderDropdown } from 'components/Header/HaderDropdown/HeaderDropdown';
import { SettingModal } from 'components/SettingModal/SettingModal';
import { DeleteModal } from 'components/Modal/DeleteModal';
import {
  ButtonCancel,
  ButtonRed,
  SecondTitleModal,
} from 'components/Modal/DeleteModal.styled';
import { ButtonsWrapperLogOut } from 'components/Modal/logOutModal.styled';
import { signOutThunk } from '../../redux/users/usersOperations';

export const Header = () => {
  const headerNode = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutModalIsOpen, setLogoutModalIsOpen] = useState(false);
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
  const [settingModalIsOpen, setSettingModalIsOpen] = useState(false);

  useEffect(() => {
        const body = document.body;
        if (settingModalIsOpen) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
        return () => {
            body.style.overflow = 'auto';
        };
    }, [settingModalIsOpen]);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const username = useSelector(state => state.auth.user.username);
  const avatar = useSelector(state => state.auth.user.avatarURL);

  const onClickUserLogo = e => {
    if (e.currentTarget.classList.contains('open')) {
      setDropdownIsOpen(false);
      return;
    }
    setDropdownIsOpen(true);
  };

  return (
    <HeaderContainer className="container" ref={headerNode}>
      <Link to="homepage">
        <img
          src={logo}
          alt="Logo tracker of water"
          height="48px"
          width="102px"
        />
      </Link>
      {isLoggedIn ? (
        <UserLogoWrapper>
          <UserLogo
            onClick={onClickUserLogo}
            className={dropdownIsOpen && 'open'}
          >
            <span>{username}</span>
            <img height="28" width="28" src={avatar} alt="User avatar" />
            <svg height="28" width="28">
              <use href={iconSprite + '#icon-chevron-double-up'}></use>
            </svg>
          </UserLogo>
          {dropdownIsOpen && (
            <HeaderDropdown
              settingModalIsOpen={settingModalIsOpen}
              setSettingModalIsOpen={setSettingModalIsOpen}
              setModalIsOpen={setDropdownIsOpen}
              headerNode={headerNode.current}
              contentLabel="User menu modal"
              setLogoutModal={setLogoutModalIsOpen}
            ></HeaderDropdown>
          )}
          <SettingModal
            modalIsOpen={settingModalIsOpen}
            closeModal={() => setSettingModalIsOpen(false)}
          />
          <DeleteModal
            contentLabel="Logout modal"
            isOpen={logoutModalIsOpen}
            onRequestClose={() => {
              setLogoutModalIsOpen(false);
            }}
            titleText="Log out"
          >
            <SecondTitleModal>Do you really want to leave?</SecondTitleModal>
            <ButtonsWrapperLogOut>
              <ButtonCancel onClick={() => setLogoutModalIsOpen(false)}>
                Cancel
              </ButtonCancel>
              <ButtonRed
                onClick={() => {
                  dispatch(signOutThunk());
                  setLogoutModalIsOpen(false);
                }}
              >
                Log out
              </ButtonRed>
            </ButtonsWrapperLogOut>
          </DeleteModal>
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
