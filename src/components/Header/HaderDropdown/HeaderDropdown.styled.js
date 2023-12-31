import styled from 'styled-components';

export const HeaderDropdownStyled = styled.div`
  position: absolute;
  top: 60px;
  right: 0;

  padding: 16px;
  background-color: var(--primaryWhite);
  width: fit-content;
  min-width: 110px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);

  & ul {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  & button {
    padding: 0;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--primaryBlue);
    transition: color var(--animationCubicBezier);

    &:hover {
      color: var(--secondaryOrange);
    }

    & span {
      line-height: 1.25;
      font-family: 'Roboto-regular';
    }

    & svg {
      fill: currentColor;
    }
  }
`;
