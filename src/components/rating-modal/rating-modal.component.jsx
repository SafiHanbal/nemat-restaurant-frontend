import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getImgUrl, IMAGE_CATEGORY } from '../../utils/getImgUrl';

import {
  selectActive,
  selectLoading,
  selectMenuItem,
  selectRatingLoaded,
  selectRating,
} from '../../store/rating/ratingSelector';
import { closeModal, rateItemAsync } from '../../store/rating/ratingAction';

import Button from '../button/button.component';

import {
  Container,
  CloseIcon,
  Header,
  Image,
  Name,
  StarContainer,
  StarFilled,
  StartOutlined,
  TextArea,
  Overlay,
} from './rating-modal.styles';

const RatingModal = () => {
  const dispatch = useDispatch();
  const active = useSelector(selectActive);
  const loading = useSelector(selectLoading);
  const menuItem = useSelector(selectMenuItem);
  const ratingLoaded = useSelector(selectRatingLoaded);
  const prevRating = useSelector(selectRating);

  const [rating, setRating] = useState(prevRating?.rating || 0);
  const [review, setReview] = useState('');

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  const handleSetRating = (rating) => () => {
    setRating(rating);
  };

  const handleChange = (event) => {
    setReview(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(rateItemAsync(rating, review, menuItem, prevRating?._id));
  };

  useEffect(() => {
    if (prevRating) {
      setRating(prevRating.rating);
      setReview(prevRating.review);
    } else {
      setRating(0);
      setReview('');
    }
  }, [prevRating]);

  return (
    active &&
    ratingLoaded && (
      <>
        <Overlay onClick={handleCloseModal} />
        <Container>
          <CloseIcon onClick={handleCloseModal} />
          <Header>
            <Image src={getImgUrl(IMAGE_CATEGORY.MENU, menuItem.image.small)} />
            <div>
              <Name>{menuItem.name}</Name>
              <p className="paragraph">{menuItem.description}</p>
            </div>
          </Header>
          <StarContainer>
            {[1, 2, 3, 4, 5].map((num) =>
              num <= rating ? (
                <StarFilled key={num} onClick={handleSetRating(num)} />
              ) : (
                <StartOutlined key={num} onClick={handleSetRating(num)} />
              )
            )}
          </StarContainer>
          <form onSubmit={handleSubmit}>
            <TextArea
              rows={3}
              value={review}
              placeholder="Write a review here."
              onChange={handleChange}
            />
            <Button type="submit" loading={loading} isInvalid={rating === 0}>
              {prevRating ? 'Update Rating' : 'Rate'}
            </Button>
          </form>
        </Container>
      </>
    )
  );
};

export default RatingModal;
