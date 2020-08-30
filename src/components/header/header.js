import React from 'react'
import './header.css'
import Logo from '../../Assets/netflixlogo.png'
import { Link, withRouter } from 'react-router-dom';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utilis';

class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    })
                }, () => { console.log(this.state);});
                
            } else {
                this.setState({ currentUser: userAuth })
            }
            
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render() {
        const { history } = this.props;
        return (
            <div className='header-wrapper'>

                <nav className='navbar navbar-expand-md'>
                    <Link to='#' className='logo-span navbar-brand'><img src={Logo} alt="netflix-logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className='fa fa-bars'></i></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Characters</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">TV Shows</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Latest</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">My List</Link>
                            </li>
                        </ul>

                        <span className='auth-span'>
                            <i className='fa fa-search'></i>
                            <span className='account-type'>Account Type</span>
                            {
                                this.state.currentUser ?
                                    <Link to='#' onClick={() => ((history && auth.signOut()) ?  history.push("/landing") : null)} className='nav-item nav-link btn btn-rounded'>
                                        Sign Out</Link>
                                    :
                                    <Link to='/signin' className='nav-item nav-link btn btn-rounded'>
                                        Sign In</Link>
                            }
                        </span>

                    </div>
                
                </nav>
            </div>
        
        )
    }
}

export default withRouter(Header);