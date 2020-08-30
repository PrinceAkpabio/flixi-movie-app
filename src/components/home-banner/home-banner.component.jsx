import React from 'react';
import HomePageButton from '../../components/home-page-button/home-page-button.component';
import './home-banner.styles.scss';
import { Link } from 'react-router-dom';


const HomeBanner = () => (
   <header className='home_banner'>
   
      <main className='home_banner-image'>
         <nav className='landing-nav'>
            <img id='nav-image' src={require("../../Assets/netflixlogo.png")} alt="netflix-logo" />

            <Link id='nav-link' to='signin'>Sign In</Link>
         </nav>
      </main>
  <div className='home_banner-contents'>
   <h1 className='banner-title'>Movies. Stream. Chill.</h1>
      <summary className='banner-overview'>Thousands of movies and TV shows. Available Anywhere. On demand</summary>

   <div className='banner-btn-wrapper'>
            <Link to='/signup'> <HomePageButton banner>Register</HomePageButton> </Link> 
   </div>
  </div>
</header>
);

export default HomeBanner;
