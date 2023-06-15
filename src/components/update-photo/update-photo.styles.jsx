import styled from 'styled-components';

export const AvatarContainer = styled.div`
  text-align: center;

  grid-column: 1/2;
  grid-row: 1/2;
`;

export const LargeAvatar = styled.img`
  display: block;
  margin: 0 auto 10px;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  filter: drop-shadow(0px 4px 4px rgba(var(--color-black-rgb), 0.25))
    drop-shadow(0px 2px 2px rgba(var(--color-black-rgb), 0.5));
`;

export const Form = styled.form`
  display: block;
`;

export const Label = styled.label`
  display: inline-block;
  border: none;
  padding: 10px 35px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(var(--color-black), 0.25),
    0px 1px 1px rgba(var(--color-black), 0.5);
  background: linear-gradient(
    to right,
    var(--color-primary-light),
    var(--color-primary)
  );

  color: var(--color-white);
  font-size: 14px;
  font-family: var(--font-body);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;

  cursor: pointer;
  transition: background 0.2s;
`;

export const FileInput = styled.input`
  display: none;
`;
