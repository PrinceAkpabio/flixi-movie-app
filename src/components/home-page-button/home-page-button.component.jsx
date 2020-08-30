import React from 'react';

import './home-page-button.styles.scss';


const HomePageButton = ({ children, ...otherProps }) => (
 <button className={`home_page-button ${otherProps.banner && 'banner-button'} ${otherProps.section1 && 'section1-button'} ${otherProps.section2 && 'section2-button'}`}>
  {children}
 </button>
)

export default HomePageButton;