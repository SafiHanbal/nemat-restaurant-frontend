import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { signupUserAsync } from '../../store/user/userAction';
import { selectLoading } from '../../store/user/userSelector';

import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';

import { AddressContainer } from './sign-up.styles';

const SignUp = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      house: '',
      area: '',
      city: '',
      pincode: '',
      password: '',
      confirmPassword: '',
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required.')
        .min(3, 'Name should be atleast 3 characters long.'),
      phone: Yup.string()
        .required('Phone Number is required.')
        .length(10, 'Phone number should be 10 digits long.'),
      house: Yup.string().required('House info is required.'),
      area: Yup.string().required('Area is required.'),
      city: Yup.string().required('City is required.'),
      pincode: Yup.string()
        .required('Pincode is required.')
        .length(6, 'Pincode should be 6 digits long.'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password should be atleast 8 characters long.'),
      confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .test('confirm-password', 'Password does not match.', function (value) {
          return this.parent.password === value;
        }),
    }),
    onSubmit: () => {
      dispatch(signupUserAsync(formik.values, formik.resetForm));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormInput
        label="Name"
        placeholder="Enter Name"
        type="text"
        name="name"
        value={formik.values.name}
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        error={formik.touched.name && formik.errors.name}
      />
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
      <AddressContainer>
        <FormInput
          label="House"
          placeholder="Enter House"
          type="text"
          name="house"
          value={formik.values.house}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.house && formik.errors.house}
        />
        <FormInput
          label="Area"
          placeholder="Enter Area"
          type="text"
          name="area"
          value={formik.values.area}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.area && formik.errors.area}
        />
        <FormInput
          label="City"
          placeholder="Enter City"
          type="text"
          name="city"
          value={formik.values.city}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.city && formik.errors.city}
        />
        <FormInput
          label="Pincode"
          placeholder="Enter Pincode"
          type="number"
          name="pincode"
          value={formik.values.pincode}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.pincode && formik.errors.pincode}
        />
      </AddressContainer>
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
        error={formik.touched.confirmPassword && formik.errors.confirmPassword}
      />
      <Button type="submit" loading={loading} isInvalid={!formik.isValid}>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUp;
