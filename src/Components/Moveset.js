import React, { Component } from 'react'
import '../App.css';

class Moveset extends Component {

    generateLogString = (setString) => {
        return setString.replace(/,/g, ", ").replace(/C/g, "'").replace(/2/g, "⟵").replace(/3/g, "↑").replace(/1/g, "⟶").replace(/4/g, "↓").replace(/5/g, "⟳").replace(/6/g, "⟲")

    }
  
  render(){
    return (
     <>
        <div className="moveset" > 
            <button className="delete" onClick={() => this.props.delete(this.props.moveset.id)}>delete</button>
            <span onClick={() => this.props.execute(this.props.set)}>{this.generateLogString(this.props.set)}</span>
        </div>
    </>
    );
  }
  
}

export default Moveset;
