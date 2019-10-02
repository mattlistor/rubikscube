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
            <button className="" onClick={() => this.props.pattern()}>Pattern</button>
            {this.props.logging ? 
            <><button className="logging" onClick={(e) => this.props.submitLog(e)}>Submit Log </button>
            <button className="" onClick={() => this.props.clearLog()}>Clear Log </button></>: 
            <button className="notLogging" onClick={() => this.props.beginLog()}>Begin Log</button>}
        </div>
        <div>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "U", this.props.orientation)}>U</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "UC", this.props.orientation)}>U'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "L", this.props.orientation)}>L</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "LC", this.props.orientation)}>L'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "R", this.props.orientation)}>R</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "RC", this.props.orientation)}>R'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "F", this.props.orientation)}>F</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "FC", this.props.orientation)}>F'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "B", this.props.orientation)}>B</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "BC", this.props.orientation)}>B'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "D", this.props.orientation)}>D</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "DC", this.props.orientation)}>D'</button>
        </div>
        <div>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "X", this.props.orientation)}>X</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "XC", this.props.orientation)}>X'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "Y", this.props.orientation)}>Y</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "YC", this.props.orientation)}>Y'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "Z", this.props.orientation)}>Z</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "ZC", this.props.orientation)}>Z'</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "2", this.props.orientation)}>⟵</button>

            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "3", this.props.orientation)}>↑</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "1", this.props.orientation)}>⟶</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "4", this.props.orientation)}>↓</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "5", this.props.orientation)}>⟳</button>
            <button className="moveButton" onClick={(event) => this.props.moveFromButton(event, "6", this.props.orientation)}>⟲</button>


            {/* ⇽⟳↑↓⇾ ← ⟶*/}
        </div>
    </div>
    );
  }
  
}

export default Menu;
