import React, { Component } from 'react'
import Moveset from './Moveset.js';

import '../App.css';

class Menu extends Component {
  state = {
    allUsersLogs: this.props.allUsersLogs
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.userID !== prevProps.userID) {
      this.fetchData(this.props.userID);
    }
  }

  createMovesetComponents = () => {
    return this.props.allUsersLogs.map((moveset) => <Moveset delete={this.delete} execute={this.props.execute} moveset={moveset} set={moveset.set} key={moveset.id}/>)
  }
      
  delete = (id) => {
    console.log("over here!")

    fetch(`http://localhost:3000/movesets/${id}`, {method: 'DELETE'})
    // .then(
    //     fetch("http://localhost:3000/movesets")
    //     .then(res => res.json())
    //     .then(data => {
    //             let newArray = data.filter((log) => parseInt(log.user_id) === parseInt(this.state.user_id))
    //             this.setState(
    //                 {
    //                     allUsersLogs: newArray
    //                 }
    //             )
    //         }
    //     )
    // )
}
  
  render(){
    return (
     <div className="Menu"> 
        {this.props.viewingLogs ? 
              <>
                <div>
                <button className="solve" onClick={() => this.props.solve()}>Solve!</button>
                <button align="left" onClick={() => this.props.viewLogs()}>Back to Menu</button>
                </div>
                <div className="movesetConatiner">{this.createMovesetComponents()}</div>
              </>
        :
            <>
        <div>
            <div id="content">{this.props.username} - Rubik's Cube</div> 
            <button className="solve" onClick={() => this.props.solve()}>Solve!</button>
            <button className="" onClick={() => this.props.scramble()}>Scramble</button>
            <button className="" onClick={() => this.props.pattern()}>Pattern</button>

            {this.props.logging ? 
            <><button className="logging" onClick={(e) => this.props.submitLog(e)}>Submit Log </button>
            <button className="" onClick={() => this.props.clearLog()}>Clear Log </button></>:
            <><button className="notLogging" onClick={() => this.props.beginLog()}>Begin Log</button>
            <button onClick={() => this.props.viewLogs()}>View Logs</button></>}
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
        </>
        }

    </div>
    );
  }
  
}

export default Menu;
