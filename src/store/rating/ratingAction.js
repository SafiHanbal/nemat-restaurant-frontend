import { apiRequest, API_REQ_TYPES } from '../../utils/apiRequest';
import { showAlert, ALERT_TYPES, ALERT_DURATION } from '../alert/alertAction';
import {
  openRatingModal,
  closeRatingModal,
  getRatingStart,
  getRatingSuccess,
  getRatingFailed,
  rateItemStart,
  rateItemSuccess,
  rateItemFailed,
} from './ratingSlice';

export const openModal = (menuItem) => async (dispatch) => {
  dispatch(openRatingModal(menuItem));
  dispatch(getRatingStart());

  try {
    const url = `rating/${menuItem._id}`;
    const res = await apiRequest(url);

    const { rating } = res.data;
    dispatch(getRatingSuccess(rating));
  } catch (err) {
    dispatch(getRatingFailed(err));
    dispatch(showAlert(err.message));
  }
};

export const closeModal = () => (dispatch) => {
  dispatch(closeRatingModal());
};

export const rateItemAsync =
  (rating, review, menuItem, ratingId = null) =>
  async (dispatch) => {
    dispatch(rateItemStart());
    try {
      let query;
      if (ratingId) {
        query = apiRequest(`rating/${ratingId}`, API_REQ_TYPES.PATCH, {
          rating,
          review,
        });
      } else {
        query = apiRequest('rating', API_REQ_TYPES.POST, {
          rating,
          review,
          menuItem,
        });
      }

      const res = await query;
      if (res.status !== 'success') throw new Error(res.message);

      dispatch(rateItemSuccess(res.data.rating));
      dispatch(
        showAlert(
          'Item rated successfully.',
          ALERT_TYPES.SUCCESS,
          ALERT_DURATION.SHORT
        )
      );
    } catch (err) {
      dispatch(rateItemFailed(err));
      dispatch(showAlert(err.message));
    }
  };
