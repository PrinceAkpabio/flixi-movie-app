import React from 'react';
import { ReactComponent as Android} from '../../../Assets/andriod.svg';
import { ReactComponent as Ios } from '../../../Assets/ios.svg';
import { ReactComponent as Roku } from '../../../Assets/roku.svg';
import { ReactComponent as AppleTv } from '../../../Assets/apple-tv.svg';
import { ReactComponent as Amazon } from '../../../Assets/amazon.svg';
import { ReactComponent as Tivo } from '../../../Assets/tivo.svg';
import { ReactComponent as Xfinity } from '../../../Assets/xfinity.svg';
import './home-section-2.styles.scss';


const HomeSection2 = () => (
 <header className='section2'>
  <div className='section2-image'></div>

  <div className='section2-contents'>
   <h1 className='section-title'>Stream anywhere</h1>
   <summary className='section-overview'>Flixi is available for free on Android, iOS, Roku, Apple TV, Amazon Fire TV, Xfinity X1, Xbox, Samsung Smart TVs, Sony Smart TVs, PlayStation and the web.
   </summary>
   

   <div className='section2-icons'>

    <div className='section2-icons-1'>
     <Android className='svg' />
     <Ios className='svg' />
     <Roku className='svg' />
     <AppleTv className='svg' />
    </div>

    
    <div className='section2-icons-2'>
     <Amazon className='svg' />
     <Tivo className='svg' />
     <Xfinity className='svg' />
    </div>
    
   </div>
  </div>
 
 </header>
);

export default HomeSection2;
