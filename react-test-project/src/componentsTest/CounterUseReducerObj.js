import React, {useReducer} from 'react';

const initialState = {
  firstCounter: 0,
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'crement':
      return {...state, firstCounter: state.firstCounter + action.value};
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

function CounterUseReducerObj() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  
  return (
    <div>
      <div>Count # {count.firstCounter}</div>
      
      <button onClick={() => dispatch({type: 'crement', value: 1})}>Inc</button>
      <button onClick={() => dispatch({type: 'crement', value: -1})}>Dec</button>
      <button onClick={() => dispatch({type: 'crement', value: 5})}>Inc 5</button>
      <button onClick={() => dispatch({type: 'crement', value: -5})}>Dec 5</button>
      
      <button onClick={() => dispatch({type: 'reset'})}>Res</button>
  
      
      <div>Count # {countTwo.firstCounter}</div>
  
      <button onClick={() => dispatchTwo({type: 'crement', value: 1})}>Inc</button>
      <button onClick={() => dispatchTwo({type: 'crement', value: -1})}>Dec</button>
      <button onClick={() => dispatchTwo({type: 'crement', value: 5})}>Inc 5</button>
      <button onClick={() => dispatchTwo({type: 'crement', value: -5})}>Dec 5</button>
  
      <button onClick={() => dispatchTwo({type: 'reset'})}>Res</button>
    </div>
  );
}

export default CounterUseReducerObj;