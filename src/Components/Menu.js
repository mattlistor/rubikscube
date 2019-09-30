import React, { Component } from 'react'
import '../App.css';

class Menu extends Component {
  render(){
    return (
     <div className="Menu"> 
        <div>
        <div id="content">Rubik's Cube</div> 
        <button className="solve" onClick={() => this.props.solve()}>Solve!</button>
        <button className="" onClick={() => this.props.scramble()}>Scramble</button>
        <button className="solve" onClick={() => this.props.moveFromButton("Y", this.props.orientation)}>Y</button>
        {/* <button className="solve" onClick={() => console.log(this)}>Y</button> */}

        </div>
    </div>
    );
  }
  
}

export default Menu;
