import styled from 'styled-components';
import HeroImageJpg from '../../assets/hero-img.jpg';

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 25px 0;
  text-align: center;
`;

export const HeroImage = styled.div`
  height: 250px;
  width: 90vw;
  max-width: 1200px;
  background: url(${HeroImageJpg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const DetailsContainer = styled.div`
  margin: 10px;
`;

export const Description = styled.p`
  margin: 0 10px 10px;
`;

export const Heading = styled.h3`
  text-align: center;
`;
