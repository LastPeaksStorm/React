import React, {Component} from 'react';
import FRInput from "./FRInput";

class FRParentInput extends Component {
  constructor() {
    super();
  
    this.inputRef = React.createRef();
  }
  
  clickHandle = () => {
    this.inputRef.current.focus();
  }
  
  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}/>
        <button onClick={this.clickHandle}>Focus Input</button>
      </div>
    );
  }
}

export default FRParentInput;