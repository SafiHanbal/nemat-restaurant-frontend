import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import { selectLoading, selectPhone } from '../../store/user/userSelector';
import { resetPasswordAsync } from '../../store/user/userAction';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const phone = useSelector(selectPhone);

  const formik = useFormik({
    initialValues: {
      otp: '',
      password: '',
      confirmPassword: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      otp: Yup.string()
        .required('OTP is required.')
        .length(4, 'OTP should be 4 digits long.'),
      password: Yup.string()
        .required('Password is required.')
        .min(8, 'Password should be atleast 8 characters long'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required.')
        .test('confirm-password', 'Password does not match.', function (value) {
          return this.parent.password === value;
        }),
    }),
    onSubmit: () => {
      const passwordData = {
        ...formik.values,
        otp: String(formik.values.otp),
        phone,
      };
      dispatch(resetPasswordAsync(passwordData, formik.resetForm));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          label="OTP"
          placeholder="Enter OTP"
          type="number"
          name="otp"
          value={formik.values.otp}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.otp && formik.errors.otp}
        />
        <FormInput
          label="Password"
          placeholder="Enter Password"
          type="password"
          name="password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.password && formik.errors.password}
        />
        <FormInput
          label="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Button type="submit" loading={loading} isInvalid={!formik.isValid}>
          Reset Password
        </Button>
      </form>
    </div>
  );
};

export default ResetPassword;
