import styled, { keyframes } from 'styled-components';
import { ReactComponent as CloseIconSVG } from '../../assets/close-icon.svg';

const fadeIn = keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`;

const BaseAlert = styled.div`
  position: fixed;
  left: 10px;
  bottom: 10px;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  width: 80vw;
  max-width: 450px;
  padding: 10px 15px;
  border-radius: 5px;
  background: var(--color-white);
  filter: drop-shadow(0px 4px 4px rgba(var(--color-black-rgb), 0.25))
    drop-shadow(0px 2px 2px rgba(var(--color-black-rgb), 0.5));

  font-weight: 600;
  animation: ${fadeIn} 0.1s;
`;

export const ErrorAlert = styled(BaseAlert)`
  border: 1px solid var(--color-danger);
  color: var(--color-danger);
`;

export const WarningAlert = styled(BaseAlert)`
  border: 1px solid var(--color-warning);
  color: var(--color-warning);
`;

export const InfoAlert = styled(BaseAlert)`
  border: 1px solid var(--color-info);
  color: var(--color-info);
`;

export const SuccessAlert = styled(BaseAlert)`
  border: 1px solid var(--color-success);
  color: var(--color-success);
`;

const BaseCloseIcon = styled(CloseIconSVG)`
  height: 25px;
  width: 25px;
`;

export const ErrorClose = styled(BaseCloseIcon)`
  fill: var(--color-danger);
`;

export const WarningClose = styled(BaseCloseIcon)`
  fill: var(--color-warning);
`;

export const InfoClose = styled(BaseCloseIcon)`
  fill: var(--color-info);
`;

export const SuccessClose = styled(BaseCloseIcon)`
  fill: var(--color-success);
`;
