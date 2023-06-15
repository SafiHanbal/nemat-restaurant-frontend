import styled from 'styled-components';
import Button from '../button/button.component';
import { ReactComponent as ServingIconSVG } from '../../assets/serving-icon.svg';
import { ReactComponent as StarIconSVG } from '../../assets/star-icon.svg';

export const Container = styled.div`
  display: flex;
  align-items: flex-start;

  width: 95vw;
  max-width: 380px;
  padding: 15px;
  background: var(--color-gray-100);
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(var(--color-black-rgb), 0.25),
    0px 0px 2px rgba(var(--color-black-rgb), 0.5);
`;

export const Image = styled.img`
  height: auto;
  width: 50%;
  max-width: 180px;
  border-radius: 5px;
  filter: drop-shadow(0px 2px 2px rgba(var(--color-black-rgb), 0.25));
`;

export const Details = styled.div`
  width: 50%;
  margin-left: 15px;
`;

export const TextBold = styled.p`
  margin-bottom: 4px;
  font-weight: 600;
  line-height: 1.1;
`;

export const ServingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2px;
`;

export const ServingIcon = styled(ServingIconSVG)`
  height: 16px;
  width: 16px;
  margin-right: 2px;
`;

export const Servings = styled.p`
  line-height: 1;
`;

export const RatingContianer = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;

  width: max-content;
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 5px;
  background: var(--color-secondary);
`;

export const RatingIcon = styled(StarIconSVG)`
  height: 14px;
  width: 14px;
  margin-right: 3px;
  fill: var(--color-white);
`;

export const RatingText = styled.p`
  line-height: 1;
  font-size: 14px;
  color: var(--color-white);
`;

export const RateBtn = styled.button`
  border: none;
  background: none;
  color: var(--color-primary);
  text-decoration: underline;
`;

export const FullWidthButton = styled(Button)`
  width: 100%;
  padding: 10px;
`;
