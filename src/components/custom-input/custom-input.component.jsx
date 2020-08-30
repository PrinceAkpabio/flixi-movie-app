import React from 'react';

import './custom-input.styles.scss';


const FormInput = ({handleChange, label, ...otherProps}) => (
 <div className='input-group'>
  <input className='form-input' onChange={handleChange} {...otherProps} />
   {
   label ? (<label className={`label ${otherProps.value.length && 'shrink'}`} >{label}</label>) : null
   } 
 </div>
)


export default FormInput;

