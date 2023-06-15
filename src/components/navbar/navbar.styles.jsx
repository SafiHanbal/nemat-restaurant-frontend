import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIconSVG } from '../../assets/menu-icon.svg';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

export const NavBackground = styled.div`
  background-color: var(--color-secondary);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 10px;
  max-width: 1300px;
`;

export const NavContainer = styled(Link)`
  height: 40px;
`;

export const NavLogo = styled.img`
  height: 40px;
`;

export const NavOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: var(--color-white);
  text-transform: uppercase;
`;

export const NavLinkLargeScreen = styled(NavLink)`
  display: none;

  &:nth-of-type(2) {
    margin-right: 10px;
  }

  @media only screen and (min-width: 900px) {
    display: block;
    margin-right: 15px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 36px;
  width: 36px;

  @media only screen and (min-width: 900px) {
    display: none;
  }
`;

export const MenuIcon = styled(MenuIconSVG)`
  fill: var(--color-white);
`;

export const AvatarContainer = styled(Link)`
  display: none;

  @media only screen and (min-width: 900px) {
    display: block;
    height: 40px;
    margin-left: 5px;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;

  background-color: rgba(var(--color-black-rgb), 0.5);
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.2s ease-in-out;
`;
