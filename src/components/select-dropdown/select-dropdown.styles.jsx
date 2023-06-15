import styled from 'styled-components';

export const BaseDropdown = styled.select`
  min-width: max-content;
  border: none;
  outline: none;
  scroll-behavior: smooth;
  cursor: pointer;

  font-family: var(--font-body);
  font-size: 16px;
  color: var(--color-white);
  text-align: center;
`;

export const FilledDropdown = styled(BaseDropdown)`
  width: 30vw;
  max-width: 150px;
  padding: 12px;
  background: var(--color-primary-light);
  border-radius: 5px;
`;

export const TextDropdown = styled(BaseDropdown)`
  margin-left: -25px;
  background: none;
  text-transform: uppercase;
`;

export const Option = styled.option`
  margin-bottom: 15px;
  padding: 10px !important;
  color: var(--color-gray-900);
  background-color: var(--color-white);
  text-transform: capitalize;

  &:hover,
  &:focus,
  &:active,
  &:checked {
    padding: 20px;
  }
`;
