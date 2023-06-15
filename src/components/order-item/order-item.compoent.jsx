import { getImgUrl, IMAGE_CATEGORY } from '../../utils/getImgUrl';
import { formatDate } from '../../utils/formatDate';

import {
  Container,
  Header,
  Body,
  MenuItem,
  Image,
  Details,
  Name,
  Price,
  Footer,
  TotalPrice,
} from './order-item.styles';

const OrderItem = ({ order }) => {
  const totalPrice = order.menuItems.reduce(
    (acc, item) => acc + item.menuItem.price * item.quantity,
    0
  );

  return (
    <Container>
      <Header>
        <p className="paragraph">{formatDate(order.orderedAt)}</p>
        <p className="paragraph">
          {order.deliveryOption === 'pick-up' ? 'Pick Up' : 'Home Delivery'}
        </p>
      </Header>
      <Body>
        {order.menuItems.map((item) => (
          <MenuItem key={item._id}>
            <Image
              src={getImgUrl(IMAGE_CATEGORY.MENU, item.menuItem.image.small)}
            />
            <Details>
              <Name>{item.menuItem.name}</Name>
              <p className="paragraph">
                ₹ {item.menuItem.price} x {item.quantity}
              </p>
            </Details>
            <Price>₹ {item.menuItem.price * item.quantity}</Price>
          </MenuItem>
        ))}
      </Body>
      <Footer>
        <p className="paragraph">
          {order.paymentMethod === 'upi' ? 'Paid: UPI' : 'Cash'}
        </p>
        <TotalPrice>₹ {totalPrice}</TotalPrice>
      </Footer>
    </Container>
  );
};

export default OrderItem;
