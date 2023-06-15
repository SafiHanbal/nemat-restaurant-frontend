import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { selectLoading } from '../../store/user/userSelector';
import { getOtpAsync } from '../../store/user/userAction';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);

  const formik = useFormik({
    initialValues: {
      phone: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      phone: Yup.string()
        .required('Phone number is required')
        .length(10, 'Phone number should be 10 digits long.'),
    }),
    onSubmit: () => {
      dispatch(
        getOtpAsync(formik.values, () => {
          formik.resetForm();
          navigate('/auth/reset-password');
        })
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInput
        label="Phone Number"
        placeholder="Enter Phone Number"
        type="number"
        name="phone"
        value={formik.values.phone}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.phone && formik.errors.phone}
      />
      <Button type="submit" loading={loading} isInvalid={!formik.isValid}>
        Get OTP
      </Button>
    </form>
  );
};

export default ForgetPassword;
