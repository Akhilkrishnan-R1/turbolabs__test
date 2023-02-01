import { AppBar, Toolbar } from '@mui/material';
import React from 'react';

import BannerImage from '../assets/banner.jpg'

const HeaderBanner = () => {
  return (
    <div className='banner' >
      <img className='banner__img' src={BannerImage} alt="" />
    </div>
  )
}

export default HeaderBanner