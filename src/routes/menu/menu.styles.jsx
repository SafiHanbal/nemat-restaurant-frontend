import styled from 'styled-components';

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 10px;

  @media only screen and (min-width: 900px) {
    display: none;
  }
`;
