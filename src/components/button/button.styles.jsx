import styled, { css } from 'styled-components';

const disabledBtnStyles = css`
  background: linear-gradient(
    to right,
    var(--color-primary-300),
    var(--color-primary-300)
  );
`;

export const BaseButton = styled.button`
  color: var(--color-white);
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  border: none;
  border-radius: 5px;
  padding: 10px 35px;
  box-shadow: 0 2px 2px rgba(var(--color-black-rgb), 0.5);
  background: linear-gradient(
    to right,
    var(--color-primary-light),
    var(--color-primary)
  );

  cursor: pointer;
  transition: background 0.2s;

  ${({ disable }) => (disable === 'true' ? disabledBtnStyles : '')}
`;

export const LargeButton = styled(BaseButton)`
  padding: 13px 45px;
`;

export const LightButton = styled(BaseButton)`
  background: linear-gradient(
    to right,
    var(--color-primary-100),
    var(--color-primary-300)
  );
`;
