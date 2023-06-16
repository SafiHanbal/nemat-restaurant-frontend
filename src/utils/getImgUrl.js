export const IMAGE_CATEGORY = {
  USER: 'user',
  MENU: 'menu',
};

export const getImgUrl = (category, imgName) => {
  let baseUrl;
  if (process.env.NODE_ENV === 'development') baseUrl = 'http://127.0.0.1:8000';
  else baseUrl = 'https://hanbal-nemat-restaurant.cyclic.app';

  return `${baseUrl}/img/${category}/${imgName}`;
};
