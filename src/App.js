import React from "react";
import { Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/landing-page.component";

import "./App.css";

import {
  auth,
  createUserProfileDocument,
} from "../src/firebase/firebase.utilis";
import SignUpPage from "./pages/sign-up-page/sign-up-page.component";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="netflix-app container-fluid">
        <Route exact path="/landing" component={LandingPage} />
        <Route exact path="/signup" component={SignUpPage} />
      </div>
    );
  }
}

export default App;
