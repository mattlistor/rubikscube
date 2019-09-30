import React, { Component } from 'react'
import '../App.css';

class Side extends Component {
  render(){
    return (
      <div className="Side" onClick={(e) => this.props.move(e, this.props.orientation, this.props.face)} onContextMenu={(e) => this.props.move(e, this.props.orientation, this.props.face)}>
        <div className="topRow">
          <div className="tile" id={this.props.sideOrientation[0][0]}></div>
          <div className="tile" id={this.props.sideOrientation[0][1]}></div>
          <div className="tile" id={this.props.sideOrientation[0][2]}></div>
        </div>
        <div className="midRow">
          <div className="tile" id={this.props.sideOrientation[1][0]}></div>
          <div className="tile" id={this.props.sideOrientation[1][1]}>{this.props.face}</div>
          <div className="tile" id={this.props.sideOrientation[1][2]}></div>
        </div>
        <div className="botRow">
          <div className="tile" id={this.props.sideOrientation[2][0]}></div>
          <div className="tile" id={this.props.sideOrientation[2][1]}></div>
          <div className="tile" id={this.props.sideOrientation[2][2]}></div>
        </div>
      </div>
    );
  }
  
}

export default Side;
