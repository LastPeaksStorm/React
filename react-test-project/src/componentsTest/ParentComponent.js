import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      parentName: "Bruce"
    }
    
    this.GreetParent = this.GreetParent.bind(this);
  }
  
  GreetParent(childNafe) {
    alert(`Schnello ${this.state.parentName} and ${childNafe}`);
  }
  
  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.GreetParent} />
      </div>
    )
  }
}

export default ParentComponent;