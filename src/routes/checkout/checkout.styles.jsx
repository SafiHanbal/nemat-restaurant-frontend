import styled from 'styled-components';

export const Conatainer = styled.div`
  position: relative;
  min-height: 70vw;
  padding: 20px;

  @media only screen and (min-width: 600px) {
    max-width: 550px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 900px) {
    max-width: 900px;
    margin: 0 auto;
  }
`;

export const NoItemText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  font-size: 18px;
  font-weight: 600;
  color: var(--color-gray-300);
  text-align: center;
`;

export const Heading = styled.h3`
  margin-bottom: 10px;
`;

export const TotalPrice = styled.p`
  margin-bottom: 30px;
  padding-top: 8px;
  border-top: 2px solid var(--color-black);

  font-weight: 600;
  font-size: 24px;
  text-align: end;
`;
