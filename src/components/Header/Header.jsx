import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import iconSprite from '../../images/SVG/symbol-defs.svg';
import { useSelector } from 'react-redux';
import { UserAuth, HeaderContainer, UserLogo } from './Header.styled';

export const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const username = useSelector(state => state.auth.user.username);
  const avatar = useSelector(state => state);

  return (
    <HeaderContainer>
      <Link to="homepage">
        <img src={logo} alt="Logo tracker of water" />
      </Link>
      {isLoggedIn ? (
        <UserLogo>
          <span>{username}</span>
          <img src={avatar} alt="" />
          <svg height="28" width="28">
            <use href={iconSprite + '#icon-user'}></use>
          </svg>
        </UserLogo>
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
