import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-gap: 25px;

  width: max-content;
  margin: 15px auto;

  @media only screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
