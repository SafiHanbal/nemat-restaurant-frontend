import Loader from '../loader/loader.component';
import { BaseButton, LargeButton, LightButton } from './button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base-button',
  large: 'large',
  light: 'light',
};

const getButton = (buttonType) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.large]: LargeButton,
    [BUTTON_TYPE_CLASSES.light]: LightButton,
  }[buttonType]);

const Button = ({
  children,
  buttonType = BUTTON_TYPE_CLASSES.base,
  loading = false,
  isInvalid = false,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton
      disabled={loading || isInvalid}
      disable={`${isInvalid}`}
      {...otherProps}
    >
      {loading ? <Loader /> : children}
    </CustomButton>
  );
};

export default Button;
