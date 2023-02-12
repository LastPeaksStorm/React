import React, {Component} from 'react';
import withCounterHOC from "./withCounter(HOC)";

class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button onClick={incrementCount}>Clicked { count } times</button>
    )
  }
}

export default ClickCounter;