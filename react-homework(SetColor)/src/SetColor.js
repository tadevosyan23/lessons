import React, { Component } from 'react';

class SetColor extends Component {
  constructor(props){
    super(props);

    this.state = {
      color: ""
    };

  }
  changeColor(event) {
    this.setState({
      color: event.target.value
    });
  }
  
  render(){
      console.log(this.state);
      const styleObj = {
        background: this.state.color
      };
      return (
        <div style={styleObj}  id="container">
          <h2>Mini ColorMania</h2>
          <p>HTML Hex and RGB values</p>
          <input value={this.state.color} onChange={this.changeColor.bind(this)} placeholder="set Color to color String" />
        </div>
      
    );
  }
}

export default SetColor;