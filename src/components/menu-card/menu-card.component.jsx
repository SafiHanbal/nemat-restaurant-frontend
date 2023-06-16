import { useDispatch, useSelector } from 'react-redux';
import { getImgUrl, IMAGE_CATEGORY } from '../../utils/getImgUrl';

import { selectUser } from '../../store/user/userSelector';
import { selectCartItems } from '../../store/cart/cartSelector';
import { addItemToCart } from '../../store/cart/cartAction';
import { openModal } from '../../store/rating/ratingAction';

import {
  Container,
  Image,
  Details,
  TextBold,
  ServingContainer,
  ServingIcon,
  Servings,
  RatingContianer,
  Rating,
  RatingIcon,
  RatingText,
  RateBtn,
  FullWidthButton,
} from './menu-card.styles';

const MenuCard = ({ menuItem }) => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const cartItems = useSelector(selectCartItems);

  const handleAddItem = () => {
    dispatch(addItemToCart(cartItems, menuItem));
  };

  const handleOpenModal = () => {
    dispatch(openModal(menuItem));
  };

  return (
    <Container>
      <Image src={getImgUrl(IMAGE_CATEGORY.MENU, menuItem.image?.small)} />
      <Details>
        <TextBold>{menuItem.name}</TextBold>
        <TextBold>₹ {menuItem.price}</TextBold>
        <ServingContainer>
          <ServingIcon />
          <Servings>
            {menuItem.servings}{' '}
            {menuItem.category === 'bread' ? 'pieces' : 'servings'}/order
          </Servings>
        </ServingContainer>
        <RatingContianer>
          <Rating>
            <RatingIcon />
            <RatingText>{menuItem.ratingsAverage}</RatingText>
          </Rating>
          {user && <RateBtn onClick={handleOpenModal}>Rate</RateBtn>}
        </RatingContianer>
        <FullWidthButton onClick={handleAddItem}>Add to Cart</FullWidthButton>
      </Details>
    </Container>
  );
};

export default MenuCard;
