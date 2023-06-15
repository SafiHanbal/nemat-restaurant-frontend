import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ShoppingBagSVG } from '../../assets/shopping-bag-icon.svg';

export const Container = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 36px;
  width: 36px;
  margin-right: 5px;
`;

export const Bag = styled(ShoppingBagSVG)`
  fill: white;
`;

export const Count = styled.span`
  position: absolute;
  top: 58%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  font-size: 10px;
  color: var(--color-white);
`;
