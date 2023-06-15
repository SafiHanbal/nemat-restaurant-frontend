import styled, { keyframes } from 'styled-components';
import { ReactComponent as CloseIconSVG } from '../../assets/close-icon.svg';
import { ReactComponent as StarIconSVG } from '../../assets/star-icon.svg';
import { ReactComponent as StarIconOulinedSVG } from '../../assets/star-icon-outlined.svg';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 95vw;
  max-width: 500px;
  padding: 10px;
  background: var(--color-white);
  box-shadow: 0px 4px 4px rgba(var(--color-black-rgb), 0.3);
  border-radius: 5px;

  line-height: 1.2;
  animation: ${fadeIn} 0.1s ease-in-out;
`;

export const CloseIcon = styled(CloseIconSVG)`
  position: absolute;
  top: -36px;
  right: -10px;

  height: 36px;
  width: 36px;
  padding: 5px;
  fill: var(--color-white);
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Image = styled.img`
  width: 45%;
  margin-right: 10px;
  border-radius: 5px;
`;

export const Name = styled.p`
  font-weight: 600;
`;

export const StarContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

export const StarFilled = styled(StarIconSVG)`
  height: 36px;
  width: 36px;
  fill: var(--color-primary-light);
`;

export const StartOutlined = styled(StarIconOulinedSVG)`
  height: 36px;
  width: 36px;
  fill: var(--color-primary-light);
`;

export const TextArea = styled.textarea`
  display: block;

  width: 100%;
  margin-bottom: 5px;
  padding: 6px 12px;
  border: 3px solid var(--color-gray-700);
  border-radius: 5px;

  font-family: var(--font-body);
  font-size: 16px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
  background: rgba(var(--color-black-rgb), 0.5);
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.1s ease-in-out;
`;
