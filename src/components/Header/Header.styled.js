import styled from 'styled-components';

export const HeaderContainer = styled.header`
  &.container {
    padding-top: 8px;
    position: absolute;
    z-index: 1;
    transform: translate(-50%);
    left: 50%;
    display: flex;
    gap: 8px;
    justify-content: space-between;
  }
`;

export const UserAuth = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  padding: 10px 0;

  & span {
    display: block;
    font-family: 'Roboto-regular';
    font-size: 16px;

    color: transparent;
    overflow: hidden;

    background: linear-gradient(
      90deg,
      var(--secondaryOrange) 0%,
      var(--secondaryOrange) 50%,
      var(--primaryBlue) 50%,
      var(--primaryBlue) 100%
    );

    background-size: 200% 100%;
    background-position: 100%;

    -webkit-background-clip: text;
    background-clip: text;

    transition: background-position var(--animationCubicBezier);

    &::after {
      display: block;
      content: '';

      width: 100%;
      height: 2px;
      border-radius: 1px;
      background-color: var(--secondaryOrange);
      transform-origin: left;
      transform: scaleX(0);
      transition: transform var(--animationCubicBezier);
    }
  }

  &:hover {
    & span {
      background-position: 0 100%;

      &::after {
        transform: scaleX(1);
      }
    }
  }
`;

export const UserLogoWrapper = styled.div`
  position: relative;
  display: flex;
  max-width: calc(100% - 102px);
  width: auto;
  flex-shrink: 2;
`;

export const UserLogo = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 10px 0;

  & span {
    flex-shrink: 2;
    margin-right: 8px;
    font-family: 'Roboto-regular';
    font-size: 16px;
    color: var(--primaryBlack);
    text-overflow: ellipsis;
    overflow: hidden;
    width: auto;
  }

  & img {
    flex-shrink: 0;
    border-radius: 50%;
    margin-right: 4px;
  }

  & svg {
    flex-shrink: 0;
    transition: transform var(--animationCubicBezier);
    fill: var(--primaryBlue);
  }

  &.open {
    & svg {
      transform: rotateX(180deg);
    }
  }
`;
