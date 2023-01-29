import React from 'react';

import BannerImage from '../assets/banner.jpg'

const HeaderBanner = () => {
  return (
    <div className='banner'>
        <img src={BannerImage} className="banner__img" alt="" />
    </div>
  )
}

export default HeaderBanner