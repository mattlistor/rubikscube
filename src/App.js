import React, { Component } from 'react'
import Layout from './Components/Layout.js';
import Menu from './Components/Menu.js';

import './App.css';

class App extends Component {

  render(){
    return (
      <div className="App">
        <Layout />
        {/* <audio controls volume = "0" class = 'loseSound' hidden src={"https://s1.vocaroo.com/media/download_temp/Vocaroo_s1pdYmETnP82.mp3"}></audio> */}
      </div>
    );
  }
  
}

export default App;
