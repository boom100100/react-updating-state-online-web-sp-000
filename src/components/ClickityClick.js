import React, { Component } from 'react';

export default class ClickityClick extends Component {
  clickHandler = (event) => {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
    
  }
  
  render() {
    return (
      <div><button onClick={this.clickHandler} /></div>
      //    <DelayedButton onDelayedClick={ event => console.log(event) } delay={1500} />

    )
  }
  
  
}