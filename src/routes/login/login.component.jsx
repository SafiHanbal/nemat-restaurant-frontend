import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { loginUserAsync } from '../../store/user/userAction';
import { selectLoading } from '../../store/user/userSelector';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

import { ResetPassLink } from './login.styles';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const formik = useFormik({
    initialValues: {
      phone: '',
      password: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      phone: Yup.string()
        .required('Phone Number is required.')
        .length(10, 'Phone number should be 10 digits long.'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password should be atleast 8 characters long.'),
    }),
    onSubmit: () => {
      dispatch(loginUserAsync(formik.values, formik.resetForm));
    },
  });

  return (
    <div>
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
        <Button type="submit" loading={loading} isInvalid={!formik.isValid}>
          Login
        </Button>
      </form>
      <ResetPassLink to="forget-password">Forgot Password?</ResetPassLink>
    </div>
  );
};

export default Login;
