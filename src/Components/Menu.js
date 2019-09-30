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
        </div>
        <div>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "X", this.props.orientation)}>X</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "XC", this.props.orientation)}>X'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "Y", this.props.orientation)}>Y</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "YC", this.props.orientation)}>Y'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "Z", this.props.orientation)}>Z</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "ZC", this.props.orientation)}>Z'</button>
        </div>
        <div>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "X", this.props.orientation)}>X</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "XC", this.props.orientation)}>X'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "Y", this.props.orientation)}>Y</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "YC", this.props.orientation)}>Y'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "Z", this.props.orientation)}>Z</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "ZC", this.props.orientation)}>Z'</button>
        </div>
    </div>
    );
  }
  
}

export default Menu;
