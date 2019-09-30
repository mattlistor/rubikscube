import React, { Component } from 'react'
import '../App.css';

class Menu extends Component {
  state = {
    // colors: [["B", "R", "O"], ["W", "Y", "B"], ["G", "G", "R"]]
  }

  render(){
    return (
     <div className="Menu"> 
        <div>
        <div id="content">Rubik's Cube</div> 
        <button className="solve" onClick={() => this.props.solve()}>Solve!</button>
        <button className="solve" onClick={() => this.props.scramble()}>Scramble</button>

        </div>
    </div>
    );
  }
  
}

export default Menu;
