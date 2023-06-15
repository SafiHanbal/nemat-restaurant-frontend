import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 2px;

  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-gray-700);
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 2px;
  padding: 6px 12px;
  border: 3px solid var(--color-gray-700);
  border-radius: 5px;

  font-family: var(--font-body);
  font-size: 16px;
`;

export const ErrorText = styled.p`
  font-size: 14px;
  color: var(--color-danger);
`;
