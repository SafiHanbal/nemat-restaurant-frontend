import { useSelector } from 'react-redux';
import { selectCartCount } from '../../store/cart/cartSelector';

import { Container, Bag, Count } from './bag-icon.styles';

const BagIcon = (props) => {
  const cartCount = useSelector(selectCartCount);
  return (
    <Container {...props}>
      <Bag />
      <Count>{cartCount}</Count>
    </Container>
  );
};

export default BagIcon;
