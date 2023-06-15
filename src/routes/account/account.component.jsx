import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectLoading } from '../../store/user/userSelector';
import { logoutUserAsync } from '../../store/user/userAction';

import Button from '../../components/button/button.component';
import UpdatePhoto from '../../components/update-photo/update-photo.component';
import UpdateProfile from '../../components/update-profile/update-profile.component';
import UpdatePassword from '../../components/update-password/update-password.compoent';

import { Container, LogoutContainer, Heading } from './account.styles';

const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector(selectLoading);

  // Logout Handler
  const handleLogout = () => {
    const successHandler = () => {
      navigate('/');
    };

    dispatch(logoutUserAsync(successHandler));
  };

  return (
    <Container>
      <UpdatePhoto />
      <UpdateProfile />
      <UpdatePassword />
      <LogoutContainer>
        <Heading className="heading-3">Logout</Heading>
        <Button loading={loading} onClick={handleLogout}>
          Logout
        </Button>
      </LogoutContainer>
    </Container>
  );
};

export default Account;
