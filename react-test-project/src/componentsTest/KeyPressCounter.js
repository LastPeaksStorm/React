import React, {Component} from 'react';
import withCounterHOC from "./withCounter(HOC)";
import { useEffect } from "react";

class KeyPressCounter extends Component {
  
  render() {
    const { count, incrementCount } = this.props;
    document.addEventListener('keydown', incrementCount);
    return (
      <div>
        <h1>Pressed any key { count }</h1>
      </div>
    );
  }
}

export default KeyPressCounter;