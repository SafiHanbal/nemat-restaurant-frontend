import { useEffect } from 'react';
import { Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../../store/user/userSelector';

import Login from '../login/login.component';
import SignUp from '../sign-up/sign-up.component';
import ForgetPassword from '../forget-password/forget-password.component';
import ResetPassword from '../reset-password/reset-password.component';
import LinkButton from '../../components/link-button/link-button.component';
import AuthenticationImageJPg from '../../assets/authentication-image.jpg';

import {
  Container,
  FormContainer,
  AuthMethodContainer,
  Image,
} from './authentication.styles';

const Authentication = () => {
  const nestedRoute = useParams()['*'];
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user) navigate('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <Container>
      <FormContainer>
        <AuthMethodContainer>
          <LinkButton to="/auth" active={nestedRoute === '' ? true : false}>
            Login
          </LinkButton>
          <LinkButton
            to="/auth/sign-up"
            active={nestedRoute === 'sign-up' ? true : false}
          >
            Sign Up
          </LinkButton>
        </AuthMethodContainer>
        <Routes>
          <Route index element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Routes>
      </FormContainer>
      <Image
        src={AuthenticationImageJPg}
        alt="nemat dishes image on auth page"
      />
    </Container>
  );
};

export default Authentication;
