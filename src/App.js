import React, { Component } from 'react'
import Layout from './Components/Layout.js';
import Menu from './Components/Menu.js';

import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        {/* <div id="content">Rubik's Cube</div> */}
        <Layout />
      </div>
    );
  }
  
}

export default App;
