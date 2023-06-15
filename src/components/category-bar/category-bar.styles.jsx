import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  padding: 7px 10px;
  background: linear-gradient(
    to bottom,
    var(--color-primary),
    var(--color-primary-light)
  );

  @media only screen and (min-width: 900px) {
    display: block;
  }
`;

export const NavLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1250px;
  margin: 0 auto;
`;

export const NavLink = styled.p`
  text-transform: uppercase;
  color: var(--color-white);
  cursor: pointer;
`;
