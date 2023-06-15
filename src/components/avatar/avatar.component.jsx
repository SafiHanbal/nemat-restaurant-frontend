import { AvatarImg } from './avatar.styles';

const Avatar = ({ imgSrc, ...otherProps }) => {
  return <AvatarImg src={imgSrc} {...otherProps} />;
};

export default Avatar;
