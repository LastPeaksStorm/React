import React, {useReducer} from 'react';

const initialState = 0;

const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function CounterUseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      <div>Count # {count}</div>
      <button onClick={() => dispatch('increment')}>Inc</button>
      <button onClick={() => dispatch('decrement')}>Dec</button>
      <button onClick={() => dispatch('reset')}>Res</button>
    </div>
  );
}

export default CounterUseReducer;