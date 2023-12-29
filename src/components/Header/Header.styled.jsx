import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 8px 0 24px 0;
`;

export const UserAuth = styled.button`
  text-align: center;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: none;
  padding: 10px 0;

  & span {
    font-family: 'Roboto-regular';
    font-size: 16px;
    color: var(--primaryBlue);
  }
`;

export const UserLogo = styled.button`
  display: flex;
`;
