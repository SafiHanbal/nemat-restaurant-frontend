import { useSelector, useDispatch } from 'react-redux';

import {
  selectType,
  selectMessage,
  selectActive,
} from '../../store/alert/alertSelector';
import { removeAlert } from '../../store/alert/alertSlice';

import {
  ErrorAlert,
  WarningAlert,
  InfoAlert,
  SuccessAlert,
  ErrorClose,
  WarningClose,
  InfoClose,
  SuccessClose,
} from './alert.styles';

const getAlert = (alertType) =>
  ({
    ERROR: ErrorAlert,
    WARNING: WarningAlert,
    INFO: InfoAlert,
    SUCCESS: SuccessAlert,
  }[alertType]);

const getCloseIcon = (alertType) =>
  ({
    ERROR: ErrorClose,
    WARNING: WarningClose,
    INFO: InfoClose,
    SUCCESS: SuccessClose,
  }[alertType]);

const Alert = () => {
  const dispatch = useDispatch();
  const active = useSelector(selectActive);
  const message = useSelector(selectMessage);
  const type = useSelector(selectType);

  const CustomAlert = getAlert(type);
  const CustomCloseIcon = getCloseIcon(type);

  const handleRemoveAlert = () => {
    dispatch(removeAlert());
  };

  return (
    active && (
      <CustomAlert>
        <p>{message}</p>
        <CustomCloseIcon onClick={handleRemoveAlert} />
      </CustomAlert>
    )
  );
};

export default Alert;
