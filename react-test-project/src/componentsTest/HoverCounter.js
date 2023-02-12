import React, {Component} from 'react';
import withCounterHOC from "./withCounter(HOC)";

class HoverCounter extends Component {
  
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={ incrementCount }>Hovered { count } times</h2>
      </div>
    );
  }
}

export default HoverCounter;