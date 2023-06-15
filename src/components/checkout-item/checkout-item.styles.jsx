import styled from 'styled-components';
import { ReactComponent as ServingIconSVG } from '../../assets/serving-icon.svg';
import { ReactComponent as DecrementIconSVG } from '../../assets/before-icon.svg';
import { ReactComponent as IncrementIconSVG } from '../../assets/next-icon.svg';
import { ReactComponent as DeleteIconSVG } from '../../assets/delete-icon.svg';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr 70px;
  align-items: center;

  margin-bottom: 10px;

  @media only screen and (min-width: 900px) {
    grid-template-columns: 70px 200px repeat(4, 1fr);
  }
`;

export const ItemImage = styled.img`
  height: auto;
  width: 70px;
  border-radius: 5px;
`;

export const Details = styled.div`
  line-height: 1.2;
  margin-left: 10px;
`;

export const ItemName = styled.p`
  font-weight: 600;
`;

export const ServingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ServingIcon = styled(ServingIconSVG)`
  display: block;
  height: 18px;
  width: 18px;
  margin-right: 4px;
`;

export const TotalPrice = styled.p`
  font-size: 18px;
  font-weight: 600;

  justify-self: end;

  @media only screen and (min-width: 900px) {
    grid-column: 6 / 7;
  }
`;

export const Price = styled.p`
  min-width: 36px;

  @media only screen and (min-width: 900px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-self: center;

  @media only screen and (min-width: 900px) {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
  }
`;

export const DecrementIcon = styled(DecrementIconSVG)`
  height: 36px;
  width: 36px;
  padding: 2px;
  cursor: pointer;
`;

export const Quantity = styled.p`
  margin: 0 4px;
`;

export const IncrementIcon = styled(IncrementIconSVG)`
  height: 36px;
  width: 36px;
  padding: 2px;
  cursor: pointer;
`;

export const DeleteIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  cursor: pointer;

  justify-self: end;

  @media only screen and (min-width: 900px) {
    grid-column: 5 / 6;
    grid-row: 1 / 2;
    justify-self: center;
  }
`;

export const DeleteIcon = styled(DeleteIconSVG)`
  height: 20px;
  width: 20px;
  fill: var(--color-danger);
`;
