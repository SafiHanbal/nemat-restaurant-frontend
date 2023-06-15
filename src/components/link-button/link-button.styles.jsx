import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BaseButton = styled(Link)`
  box-shadow: 0px 2px 2px rgba(var(--color-black-rgb), 0.25);
  padding: 4px 10px;
  border-radius: 5px;

  font-weight: 600;
  text-align: center;
`;

export const FilledButton = styled(BaseButton)`
  color: var(--color-white);
  background: var(--color-primary-light);
`;

export const OutlinedButton = styled(BaseButton)`
  color: var(--color-primary-light);
  border: 1px solid var(--color-primary-light);
`;
