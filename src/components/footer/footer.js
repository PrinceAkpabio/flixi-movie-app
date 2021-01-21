import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';

let Footer =()=>{
    return(
        <div className = 'footer-wrapper'>
            <p className = 'footer-top'><Link className='link' to='#'>Questions? Contact us.</Link></p>
            <ul className = 'footer-links row'>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">FAQ</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Help Center</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Account</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Media Center</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Investor Relations</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Jobs</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Ways to Watch</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Terms of Use</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Privacy</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Cookie Preferences</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Corporate Information</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Contact Us</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Speed Test</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Legal Notices</Link></li>
                <li className="footer-link-item col-md-3 col-sm-4 col-6"><Link className='link' to="#">Netflix Originals</Link></li>
            </ul>
            <p className = 'footer-country'>Netflix Nigeria</p>
        </div>
    )
}

export default Footer;

