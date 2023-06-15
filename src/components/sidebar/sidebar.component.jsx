import { useSelector } from 'react-redux';
import { getImgUrl, IMAGE_CATEGORY } from '../../utils/getImgUrl';
import { selectUser } from '../../store/user/userSelector';

import Avatar from '../avatar/avatar.component';

import {
  Container,
  Header,
  TextContainer,
  Name,
  Phone,
  Body,
  Option,
  CloseIconContainer,
  CloseIcon,
} from './sidebar.styles';

const Sidebar = ({ toggleSidebar }) => {
  const user = useSelector(selectUser);

  return (
    <Container>
      <Header>
        <Avatar imgSrc={getImgUrl(IMAGE_CATEGORY.USER, user.photo)} />
        <TextContainer>
          <Name>{user.name}</Name>
          <Phone>{user.phone}</Phone>
        </TextContainer>
        <CloseIconContainer onClick={toggleSidebar}>
          <CloseIcon />
        </CloseIconContainer>
      </Header>
      <Body>
        <Option to="/" onClick={toggleSidebar}>
          Home
        </Option>
        <Option to="/menu" onClick={toggleSidebar}>
          Menu
        </Option>
        <Option to="/account" onClick={toggleSidebar}>
          Account
        </Option>
        <Option to="/checkout" onClick={toggleSidebar}>
          Cart
        </Option>
        <Option to="/orders" onClick={toggleSidebar}>
          Orders
        </Option>
      </Body>
    </Container>
  );
};

export default Sidebar;
