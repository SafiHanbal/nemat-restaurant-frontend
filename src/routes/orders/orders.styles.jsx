import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 80vh;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;

export const Heading = styled.h3`
  margin-bottom: 10px;
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
