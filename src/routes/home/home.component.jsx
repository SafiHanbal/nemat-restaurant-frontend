import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMenuAsync, MENU_CATEGORY_TYPES } from '../../store/menu/menuAction';
import { selectMenu } from '../../store/menu/menuSelector';

import Button from '../../components/button/button.component';
import MenuItems from '../../components/menu-items/menu-items.component';

import {
  Main,
  HeroImage,
  DetailsContainer,
  Description,
  Heading,
} from './home.styles';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isSpecial } = useSelector(selectMenu);

  const handleMenuBtnClick = () => {
    navigate('/menu');
  };

  useEffect(() => {
    dispatch(getMenuAsync(MENU_CATEGORY_TYPES.IS_SPECIAL));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Main>
        <HeroImage />
        <DetailsContainer>
          <h1 className="i-heading-1">
            Indulge in the Flavor of Lucknow at Nemat Restaurant
          </h1>
          <Description>
            Experience the epitome of exquisite dining. We invite you to join us
            and discover why we are a destination for discerning food
            enthusiasts.
          </Description>
          <Button buttonType="large" onClick={handleMenuBtnClick}>
            Go To Menu
          </Button>
        </DetailsContainer>
      </Main>

      <Heading className="heading-3">Nemat's Special</Heading>
      <MenuItems menuItems={isSpecial} />
    </>
  );
};

export default Home;
