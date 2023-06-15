export const IMAGE_CATEGORY = {
  USER: 'user',
  MENU: 'menu',
};

export const getImgUrl = (category, imgName) => {
  const baseUrl = 'http://127.0.0.1:8000/img';

  return `${baseUrl}/${category}/${imgName}`;
};
