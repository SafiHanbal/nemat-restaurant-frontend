import styled from 'styled-components';

export const Container = styled.div`
  margin: 150px 0;
  padding: 0 10px;

  @media only screen and (min-width: 600px) {
    margin: 150px auto;
    max-width: 550px;
  }

  @media only screen and (min-width: 900px) {
    max-width: 600px;
  }

  @media only screen and (min-width: 1100px) {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    max-width: 1000px;
  }
`;

export const FormContainer = styled.div`
  @media only screen and (min-width: 1100px) {
    width: 47%;
  }
`;

export const AuthMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 30px;
  margin-bottom: 15px;
`;

export const Image = styled.img`
  display: none;
  width: 47%;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(var(--color-black-rgb), 0.25),
    0px 2px 2px rgba(var(--color-black-rgb), 0.25);

  @media only screen and (min-width: 1100px) {
    display: block;
  }
`;
