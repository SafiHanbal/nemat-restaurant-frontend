import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (min-width: 900px) {
    grid-row: 1 / 2;
    grid-column: 2/ 3;
  }
`;

export const AddressInputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15px;
`;
