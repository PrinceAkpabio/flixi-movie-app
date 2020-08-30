import React from 'react';
import HomeBanner from '../../components/home-banner/home-banner.component';
import HomeSection1 from '../../components/home-section/home-section-1/home-section-1.component';
import HomeSection2 from '../../components/home-section/home-section-2/home-section-2.component';
import HomeSection3 from '../../components/home-section/home-section-3/home-section-3.component';
// import Footer from '../../components/footer/footer';

import './landing-page.styles.scss';



const LandingPage = () => {
 
 return (
   <main className='landing-page'>
    
    <HomeBanner />
    <HomeSection1 />
    <HomeSection2 />
    <HomeSection3 />
    {/* <Footer /> */}
   </main>
  )
 };

export default LandingPage;