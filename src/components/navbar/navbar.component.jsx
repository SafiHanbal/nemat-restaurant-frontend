import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getImgUrl, IMAGE_CATEGORY } from '../../utils/getImgUrl';

import { selectUser } from '../../store/user/userSelector';

import NematLogoPNG from '../../assets/nemat-logo.png';
import BagIcon from '../bag-icon/bag-icon.component';
import Sidebar from '../sidebar/sidebar.component';
import Avatar from '../avatar/avatar.component';

import {
  NavBackground,
  Container,
  NavContainer,
  NavLogo,
  NavOptions,
  NavLink,
  NavLinkLargeScreen,
  MenuContainer,
  MenuIcon,
  AvatarContainer,
  Overlay,
} from './navbar.styles';

const Navbar = () => {
  const user = useSelector(selectUser);
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <>
      <NavBackground>
        <Container>
          <NavContainer to="/">
            <NavLogo src={NematLogoPNG} alt="Nemat Restaurant Logo" />
          </NavContainer>
          <NavOptions>
            <NavLinkLargeScreen to="/menu">Menu</NavLinkLargeScreen>
            <NavLinkLargeScreen to="/orders">Orders</NavLinkLargeScreen>
            <BagIcon to="checkout" />
            {user ? (
              <>
                <MenuContainer onClick={toggleSidebar}>
                  <MenuIcon />
                </MenuContainer>
                <AvatarContainer to="/account">
                  <Avatar imgSrc={getImgUrl(IMAGE_CATEGORY.USER, user.photo)} />
                </AvatarContainer>
              </>
            ) : (
              <NavLink to="/auth">Login</NavLink>
            )}
          </NavOptions>
        </Container>
      </NavBackground>
      <Outlet />
      {isSidebarActive && <Overlay onClick={toggleSidebar} />}
      {isSidebarActive && <Sidebar toggleSidebar={toggleSidebar} />}
    </>
  );
};

export default Navbar;
