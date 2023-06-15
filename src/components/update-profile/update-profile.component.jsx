import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectUser,
  selectProfileLoading,
} from '../../store/user/userSelector';
import { updateProfileAsync } from '../../store/user/userAction';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { Container, AddressInputContainer } from './update-profile.styles';

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectProfileLoading);
  const user = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email || '',
      house: user.house,
      area: user.area,
      city: user.city,
      pincode: user.pincode,
    },
    validateOnMount: true,
    validationSchema: Yup.object({
      name: Yup.string().min(3, 'Name should be atleast 3 characters long.'),
      email: Yup.string().email('Provide a valid email.'),
      pincode: Yup.string().length(6, 'Pincode should be 6 digits long.'),
    }),
    onSubmit: () => {
      dispatch(updateProfileAsync(formik.values));
    },
  });

  return (
    <Container>
      <h3 className="heading-3">Update Profile</h3>
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
          label="Email"
          placeholder="Enter Email"
          type="email"
          name="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email}
        />
        <AddressInputContainer>
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
            type="text"
            placeholder="Enter Area"
            name="area"
            value={formik.values.area}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.area && formik.errors.area}
          />
          <FormInput
            label="City"
            type="text"
            placeholder="Enter City"
            name="city"
            value={formik.values.city}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.city && formik.errors.city}
          />
          <FormInput
            label="Pincode"
            type="number"
            placeholder="Enter Pincode"
            name="pincode"
            value={formik.values.pincode}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            error={formik.touched.pincode && formik.errors.pincode}
          />
        </AddressInputContainer>
        <Button type="submit" loading={loading} isInvalid={!formik.isValid}>
          Update Profile
        </Button>
      </form>
    </Container>
  );
};

export default UpdateProfile;
