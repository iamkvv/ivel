import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { Link, Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to='/'>Главная</Link>
          <Link to='cabinet'>Кабинет</Link>
        </nav>
        <Router>
          <Home path='/' />
          <Cabinet path='/cabinet' />
          <Nomatch default />
        </Router>
      </div>

    );
  }
}

const Home = () => (
  <div>
    It's HOME!
    </div>
)
const Cabinet = () => (
  <div>
    It's Cabinet!
    </div>
)

const Nomatch = () => (
  <div>
    404
    </div>
)

export default App;
