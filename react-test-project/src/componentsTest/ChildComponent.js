import React, {Component} from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('Melitto')}>Greet</button>
    </div>
  )
}

export default ChildComponent;