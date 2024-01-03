import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ReactModalStyled = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 32px 24px;
  border-radius: 10px;
  background-color: var(--primaryWhite);
  color: var(--primaryBlack);
  line-height: 1.1;
  font-family: 'Roboto-Medium';
  box-sizing: border-box;
  overflow-y: auto;

  @media screen and (min-width: 320px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    max-width: 592px;
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto-regular';
  font-size: 26px;
  line-height: 1.25;
  margin-bottom: 24px;
`;

export const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BtnSvg = styled.button`
  padding: 0;
  width: 36px;
  height: 36px;
  border: none;
  background-color: var(--primaryWhite);

  @media (min-width: 768px) and (max-width: 1439px) {
    top: 36px;
    right: 24px;
  }
`;

export const SvgClose = styled.svg`
  fill: var(--primaryBlue);
  transform: rotate(45deg);
  width: 36px;
  height: 36px;
`;
