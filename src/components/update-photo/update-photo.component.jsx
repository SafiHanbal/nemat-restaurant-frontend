import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../store/user/userSelector';
import { getImgUrl, IMAGE_CATEGORY } from '../../utils/getImgUrl';

import { updatePhotoAsync } from '../../store/user/userAction';
import { showAlert, ALERT_TYPES } from '../../store/alert/alertAction';

import Button from '../button/button.component';

import {
  AvatarContainer,
  LargeAvatar,
  Form,
  Label,
  FileInput,
} from './update-photo.styles';

const UpdatePhoto = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [photo, setPhoto] = useState(null);
  const [avartarImgSrc, setAvatarImgSrc] = useState(
    getImgUrl(IMAGE_CATEGORY.USER, user.photo)
  );

  const handlePreview = (event) => {
    setAvatarImgSrc(URL.createObjectURL(event.target.files[0]));
  };

  const resetForm = () => {
    setPhoto(null);
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (!file.type.startsWith('image/'))
      return dispatch(showAlert('Please upload an image only.'));

    handlePreview(event);
    setPhoto(file);
    dispatch(
      showAlert(
        'Saved Locally. "SAVE PHOTO" to save in database.',
        ALERT_TYPES.INFO
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('photo', photo);

    dispatch(updatePhotoAsync(formData, resetForm));
  };

  return (
    <AvatarContainer>
      <LargeAvatar src={avartarImgSrc} alt="Large avatar image" />

      <Form onSubmit={handleSubmit}>
        {photo ? (
          <Button type="submit">Save Photo</Button>
        ) : (
          <>
            <Label htmlFor="photo-input">Upload Photo</Label>
            <FileInput id="photo-input" type="file" onChange={handleChange} />
          </>
        )}
      </Form>
    </AvatarContainer>
  );
};

export default UpdatePhoto;
