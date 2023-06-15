import MenuCard from '../menu-card/menu-card.component';

import { Container } from './menu-items.styles';

const MenuItems = ({ menuItems }) => {
  return (
    <Container>
      {menuItems &&
        menuItems.map((item) => <MenuCard key={item._id} menuItem={item} />)}
    </Container>
  );
};

export default MenuItems;
