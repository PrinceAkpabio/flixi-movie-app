import React from 'react';
import { ReactComponent as Lionsgate } from '../../../Assets/lionsgate.svg';
import { ReactComponent as Paramount } from '../../../Assets/paramount.svg';
import { ReactComponent as Starz } from '../../../Assets/starz.svg';
import './home-section-1.styles.scss';


const HomeSection1 = () => (
 <header className='section1'>
  <div className='section1-contents'>
   <h1 className='section-title'>Thousands of Movies</h1>
   <summary className='section-overview'>Watch amazing movies and TV shows for free. No subscription fees, and no credit cards. Just thousands of hours of streaming video content from studios like Paramount, Lionsgate, MGM and more
   <small>With content from over 200 partners.</small> 
   </summary>
   

   <div className='section1-icons'>
    <Lionsgate className='svg'/>
    <img className='icon-img' src={require("../../../Assets/mgm.png")} alt="mgm" />
    <Paramount className='svg'/>
    <Starz className='svg'/>
   </div>

  </div>
  <div className='section1-image'></div>
 </header>
);

export default HomeSection1;
