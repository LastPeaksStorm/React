import React, {Component} from "react";

class RefsTest extends Component{
  constructor(props) {
    super(props);
    
    this.inputRef = React.createRef();
  }
  
  focusInput() {
    this.inputRef.current.focus();
  }
  
  render() {
    return (
      <React.Fragment>
        <input type="text" ref={this.inputRef}/>
      </React.Fragment>
    )
  }
}

export default RefsTest;