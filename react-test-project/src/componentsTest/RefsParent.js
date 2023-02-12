import React, {Component} from "react";
import RefsTest from "./RefsTest";

class RefsParent extends Component {
  constructor() {
    super();
    
    this.parentRef = React.createRef();
  }
  
  focusChildInput = () => {
    this.parentRef.current.focusInput();
}
  
  render() {
    return (
      <React.Fragment>
        <RefsTest ref={this.parentRef}/>
        <button onClick={this.focusChildInput}>Dont Click Me</button>
      </React.Fragment>
    )
  }
}

export default RefsParent;