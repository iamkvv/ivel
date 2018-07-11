import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Topmenu from './components/top-menu';
import Objects from './components/objects';
import ObjectsI from './components/object-i';
import ObjectsII from './components/object-ii';
import SimpleLineChart from './components/graph';

import { Link, Router } from '@reach/router';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Topmenu />
        <Router >
          <Objects path={`${process.env.PUBLIC_URL}/`} />
          <Graph path={`${process.env.PUBLIC_URL}/monitoring`} />
          <Doc path={`${process.env.PUBLIC_URL}/doc`} />
          <ObjectsI path={`${process.env.PUBLIC_URL}/objects/object_1`} />
          <ObjectsII path={`${process.env.PUBLIC_URL}/objects/object_2`} />
          <Nomatch default />
        </Router>
      </div>

    );
  }
}

const Doc = () => (
  <div>

    <p>
      <a href="http://demo.rekit.org/">Ссылка</a>
    </p>
  </div>
)
const Graph = () => (
  <div style={{ width: 800, margin: '50px auto' }}>
    <SimpleLineChart />
  </div>

)

const Nomatch = () => (
  <div style={{ width: '50%', margin: "30px auto" }}>
    <h1> 404</h1>
  </div>
)

export default App;
