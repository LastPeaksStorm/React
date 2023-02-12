import React, {Component} from 'react';

// function FRInput() {
//
// }

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input type="text" ref={ref}/>
    </div>
  )
})

export default FRInput;