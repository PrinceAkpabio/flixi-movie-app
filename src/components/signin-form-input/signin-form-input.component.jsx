import React from 'react';

import './signin-form-input.styles.scss';

export default function SignInFormInput({ handleChange, label, ...otherFormProps}) {
    return (
        <div className="input-group">
            <input className="input-box" onChange={handleChange} {...otherFormProps} />
            {/* <label className="input-label">{ label }</label> */}
        </div>
    )
};
