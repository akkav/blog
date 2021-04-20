import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import '../src/components/pages/service/menu.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Service from './components/pages/service/Service';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Review from './components/reviews/reviews';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/service' component={Service} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
