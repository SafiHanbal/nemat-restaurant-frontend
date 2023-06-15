import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 4px 4px rgba(var(--color-black-rgb), 0.25),
    0px 0px 2px rgba(var(--color-black-rgb), 0.25);
  border-radius: 5px;
  overflow: hidden;

  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5px 10px;
  background: var(--color-primary-light);
  color: var(--color-white);
`;

export const Body = styled.div`
  display: grid;
  grid-gap: 15px;
  padding: 10px;

  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 70px;
  border-radius: 5px;
`;

export const Details = styled.div`
  margin: 0 auto 0 10px;
`;

export const Name = styled.p`
  font-weight: 600;
`;

export const Price = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

export const Footer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin: 0 10px;
  padding: 10px 0;
  border-top: 2px solid var(--color-black);
`;

export const TotalPrice = styled.p`
  font-weight: 600;
  font-size: 18px;
`;
