import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { selectPasswordLoading } from '../../store/user/userSelector';
import { updatePasswordAsync } from '../../store/user/userAction';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { Container } from './update-password.styles';

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectPasswordLoading);

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      currentPassword: Yup.string()
        .required('Current Password is required.')
        .min(8, 'Password should be atleast 8 characters long.'),
      newPassword: Yup.string()
        .required('New Password is required.')
        .min(8, 'Password should be atleast 8 characters long.'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required.')
        .test('confirm-password', 'Password does not match.', function (value) {
          return this.parent.newPassword === value;
        }),
    }),
    onSubmit: () => {
      dispatch(updatePasswordAsync(formik.values, formik.resetForm));
    },
  });

  return (
    <Container>
      <h3 className="heading-3">Update Password</h3>
      <from onSubmit={formik.handleSubmit}>
        <FormInput
          label="Current Password"
          placeholder="Enter Current Password"
          type="password"
          name="currentPassword"
          value={formik.values.currentPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.currentPassword && formik.errors.currentPassword
          }
        />
        <FormInput
          label="New Password"
          placeholder="Enter New Password"
          type="password"
          name="newPassword"
          value={formik.values.newPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.newPassword && formik.errors.newPassword}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          placeholder="Enter Confirm Password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Button type="submit" loading={loading} isInvalid={!formik.isValid}>
          Update Password
        </Button>
      </from>
    </Container>
  );
};

export default UpdatePassword;
