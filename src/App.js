import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/landing-page/landing-page.component';

function App() {
  return (
    <div className="netflix-app container-fluid">
      <Route exact path='/landing' component={LandingPage} />
    </div>
  );
}

export default App;
