import React from 'react';
import HomePageButton from '../../../components/home-page-button/home-page-button.component';
import { Link } from 'react-router-dom';
import './home-section-3.styles.scss';


const HomeSection3 = () => (
 <header className='section3'>
  <div className='section3-contents'>

   <h1 className='section-title'>Get an account today</h1>

   <summary className='section-overview'>Access free content on all of your devices, sync your queue and continue watching anywhere.
   </summary>

   <div className='section3-btn-wrapper'>
    <Link to='/signup'>
     <HomePageButton section1>Register</HomePageButton>
    </Link>
    
   </div>

  </div>

 </header>
);

export default HomeSection3;
