import React from 'react';
import UserImg from '../../../../assets/images/user-img.svg';

interface ProfileImgProps {
  imgUrl?: string;
}

const ProfileImg: React.SFC<ProfileImgProps> = props => {
  const { imgUrl } = props;
  return (
    <div className="user-img">
      {imgUrl ? (
        <img className="default-img" src={imgUrl} alt="Profile" />
      ) : (
        <img className="default-img" src={UserImg} alt="Profile" />
      )}
    </div>
  );
};

export default ProfileImg;
