import { useDispatch, useSelector } from 'react-redux';
import { getImgUrl, IMAGE_CATEGORY } from '../../utils/getImgUrl';

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from '../../store/cart/cartAction';
import { selectCartItems } from '../../store/cart/cartSelector';

import {
  Container,
  ItemImage,
  Details,
  ItemName,
  ServingContainer,
  ServingIcon,
  TotalPrice,
  Price,
  DecrementIcon,
  Quantity,
  IncrementIcon,
  DeleteIconContainer,
  DeleteIcon,
  QuantityContainer,
} from './checkout-item.styles';

const CheckItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddItem = () => {
    dispatch(addItemToCart(cartItems, item));
  };

  const handleRemoveItem = () => {
    dispatch(removeItemFromCart(cartItems, item));
  };

  const handleClearItem = () => {
    dispatch(clearItemFromCart(cartItems, item));
  };

  return (
    <Container>
      <ItemImage src={getImgUrl(IMAGE_CATEGORY.MENU, item.image.small)} />
      <Details>
        <ItemName>{item.name}</ItemName>
        <ServingContainer>
          <ServingIcon />
          <p>
            {item.servings} {item.category === 'bread' ? 'pieces' : 'servings'}
            /order
          </p>
        </ServingContainer>
      </Details>

      <TotalPrice>₹ {item.price * item.quantity}</TotalPrice>

      <Price className="paragraph">₹ {item.price}</Price>

      <QuantityContainer>
        <DecrementIcon onClick={handleRemoveItem} />
        <Quantity className="paragraph">{item.quantity}</Quantity>
        <IncrementIcon onClick={handleAddItem} />
      </QuantityContainer>

      <DeleteIconContainer onClick={handleClearItem}>
        <DeleteIcon />
      </DeleteIconContainer>
    </Container>
  );
};

export default CheckItem;
