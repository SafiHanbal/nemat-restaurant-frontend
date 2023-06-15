import { FilledButton, OutlinedButton } from './link-button.styles';

export const LINK_BUTTON_TYPES = {
  filled: 'filled',
  outlined: 'outlined',
};

const getLinkButton = (type) =>
  ({
    [LINK_BUTTON_TYPES.filled]: FilledButton,
    [LINK_BUTTON_TYPES.outlined]: OutlinedButton,
  }[type]);

const LinkButton = ({ children, active, to }) => {
  const type = active ? LINK_BUTTON_TYPES.outlined : LINK_BUTTON_TYPES.filled;
  const CustomLinkButton = getLinkButton(type);
  return <CustomLinkButton to={to}>{children}</CustomLinkButton>;
};

export default LinkButton;
