import React, {useContext} from 'react';
import {CountContext} from "../App";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      Component A # {countContext.countState}
      <button onClick={() => countContext.countDispatch({type: 'crement', value: 1})}>Inc</button>
      <button onClick={() => countContext.countDispatch({type: 'crement', value: -1})}>Dec</button>
      <button onClick={() => countContext.countDispatch({type: 'crement', value: 5})}>Inc 5</button>
      <button onClick={() => countContext.countDispatch({type: 'crement', value: -5})}>Dec 5</button>
  
      <button onClick={() => countContext.countDispatch({type: 'reset'})}>Res</button>
    </div>
  );
}

export default ComponentA;