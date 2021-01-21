import React, { Component } from 'react';

import './sign-in.styles.scss';

import { ReactComponent as Logo } from '../../Assets/netflixlogo2.svg';
import { Link } from 'react-router-dom';
import SignInFormInput from '../../components/signin-form-input/signin-form-input.component';
import SignInButton from '../../components/signin-button/signin-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utilis';

class SignInPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;
        const { history } = this.props;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: ''
            });

            // eslint-disable-next-line no-unused-expressions
            (history ? history.push('/home') : null)
            
        } catch(err) {
            console.log(err);
        }
    }

    handleGoogleSignin = async (e) => {
        await signInWithGoogle();

        const { history } = this.props;
        // eslint-disable-next-line no-unused-expressions
        (history ? history.push('/home') : null)
    }

    render() {
        return (
            <div className="sign-in-container">
                <div className="container-overlay"></div>
                <Link to="/" className="home-link">
                    <Logo className="logo" />
                </Link>
                

                <form className="sign-in-form" onSubmit={this.handleSubmit}>
                    <div className="form-overlay"></div>
                    <div className="form-content">
                        <h2 className="form-title">Sign In</h2>

                        <SignInFormInput type="email" placeholder="Email Address" name="email" handleChange={this.handleChange} value={this.state.email} required />
                        <SignInFormInput type="password" placeholder="Password" name="password" handleChange={this.handleChange} value={this.state.password} required />

                        <SignInButton type="submit">
                            Sign In
                        </SignInButton>

                        <div className="remember-div">
                            <input type="checkbox" id="remember-me" name="remember-me" value="remember-me" className="remember-box" />
                            <label htmlFor="remember-me" className="remember-label">Remember me</label>
                        </div>

                        <div className="fb-btn-div">
                            <button className="fb-btn" onClick={this.handleGoogleSignin}>
                            <i className="fab fa-google"></i>
                            Login with Google</button>
                        </div>

                        <p className="sign-up-text">New to Netflix? <span className="sign-up">
                        <Link to='/signup' className="sign-up-link">Sign up now</Link>
                        </span></p>

                        
                    </div>
                    
                </form>

            </div>
        )
    }
}

export default SignInPage;


