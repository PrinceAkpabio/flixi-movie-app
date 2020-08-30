import React from 'react';

import './signin-button.styles.scss';

export default function SignInButton({ children, type }) {
    return (
        <div className="button-container">
            <button className="signin-button" type={type} >
                { children }
            </button>
        </div>
        
    )
}
