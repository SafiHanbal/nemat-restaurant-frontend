import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as CloseIconSVG } from '../../assets/close-icon.svg';

const slideIn = keyframes`
  0% {
    left: -100%;
  }

  100% {
    left: 0;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 250px;
  animation: ${slideIn} 0.2s ease-in-out;

  @media only screen and (min-width: 600px) {
    width: 40vw;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  background: var(--color-primary);
`;

export const TextContainer = styled.div`
  margin-left: 10px;
  line-height: 1;
`;

export const Name = styled.div`
  margin-bottom: 2px;
  font-weight: 600;
  color: var(--color-white);
`;

export const Phone = styled.div`
  color: var(--color-white);
  font-size: 12px;
  letter-spacing: 0.5px;
`;

export const Body = styled.div`
  min-height: 100vh;
  padding-top: 5px;
  background-color: var(--color-white);
`;

export const Option = styled(Link)`
  display: block;
  padding: 10px 20px;

  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-gray-900);
`;

export const CloseIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 36px;
  width: 36px;
`;

export const CloseIcon = styled(CloseIconSVG)`
  height: 23px;
  width: 23px;
  fill: var(--color-white);
`;
