import { createSelector } from 'reselect';

const selectUserReducer = (state) => state.user;

export const selectLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.loading
);

export const selectProfileLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.profileLoading
);

export const selectPasswordLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.passwordLoading
);

export const selectPhotoLoading = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.photoLoading
);

export const selectUser = createSelector([selectUserReducer], (userSlice) => {
  const user = userSlice.user;

  // Return null if no user found
  if (!user) return user;

  let userMap = {};

  for (const key of Object.keys(user)) {
    if (key === 'address') {
      userMap = { ...userMap, ...user[key] };
    } else {
      userMap[key] = user[key];
    }
  }

  return userMap;
});

export const selectPhone = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.phone
);

export const selectError = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice.error
);
