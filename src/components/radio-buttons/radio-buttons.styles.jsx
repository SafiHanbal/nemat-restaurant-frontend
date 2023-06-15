import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 15px;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;

  height: 26px;
  width: 26px;
  border-radius: 50%;
  border: 3px solid var(--color-primary-light);

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: none;
    height: 15px;
    width: 15px;
    background: var(--color-primary-light);
    border-radius: 50%;
  }
`;

export const RadioButton = styled.input`
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
  cursor: pointer;

  &:checked ~ ${Checkmark}::after {
    display: block;
  }
`;

export const Label = styled.label`
  position: relative;

  display: flex;
  align-items: center;

  min-height: 26px;
  margin-bottom: 8px;
  padding-left: 35px;
  cursor: pointer;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
