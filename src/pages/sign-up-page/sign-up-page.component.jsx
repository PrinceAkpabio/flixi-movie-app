import React from 'react';
import FormInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { Link, withRouter } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utilis';
// import Footer from '../../components/footer/footer';

import './sign-up-page.styles.scss';

class SignUpPage extends React.Component {
 constructor(props) {
  super(props);
  this.state = {
   displayName: '',
   email: '',
   password: '',
   confirmPassword: ''
  }
 };

 handleSubmit = async event => {
  event.preventDefault();

  const { displayName, email, password, confirmPassword } = this.state;

  if (password !== confirmPassword) {
   alert('password does not match');
   return;
  }

  try {
   const { history } = this.props;
   const { user } = await auth.createUserWithEmailAndPassword(email, password);

   await createUserProfileDocument(user, { displayName });
   
   this.setState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
   })

  (history ? history.push('/home') : null)
  
  }

  catch (error) {
   console.error('Error in creating User Docs', error);
  }

 };

 handleChange = event => {
  const { name, value } = event.target;

  this.setState({[name]: value})
 }

 render() {
  const {displayName, ...otherProps} = this.state;
  return (
   <div className='sign-up-page'>
    <nav className='signup-nav'>
     <img id='nav-image' src={require("../../Assets/netflixlogo.png")} alt="netflix-logo" />

     <Link id='nav-link' to='signin'>Sign In</Link>
    </nav>

    <div className='signup-content'>

     <h3 className='title'>Don't have an account ? Sign Up</h3>

     <form className='signup-form' onSubmit={this.handleSubmit} >

      <FormInput type='text' name='displayName' handleChange={this.handleChange} value={displayName} label='Display Name' required />
      <FormInput type='email' name='email' handleChange={this.handleChange} value={otherProps.email} label='Email' required />
      <FormInput type='password' name='password' handleChange={this.handleChange} value={otherProps.password} label='Password' required />
      <FormInput type='password' name='confirmPassword' handleChange={this.handleChange} value={otherProps.confirmPassword} label='Confirm Password' required />

      <CustomButton type='submit' >SIGN UP</CustomButton>
     </form>

     <small className='alternative'>Already have an account? <Link id='alt' to='/signin'>Sign In</Link></small>

    </div>

    {/* <Footer /> */}
    
   </div>
  )
 }
}

export default withRouter(SignUpPage);