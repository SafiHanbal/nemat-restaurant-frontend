import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr;
  padding: 10px;

  @media only screen and (min-width: 600px) {
    margin: 0 auto;
    max-width: 600px;
  }

  @media only screen and (min-width: 900px) {
    grid-template-columns: max-content 1fr;
    max-width: 1000px;
    margin: 20px auto;
  }
`;

export const LogoutContainer = styled.div`
  @media only screen and (min-width: 900px) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;

    margin-top: 220px;
  }
`;

export const Heading = styled.h3`
  margin-bottom: 10px;
`;
