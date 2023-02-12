import React from 'react';
import useCounter from "./useCounter";

function CounterOne() {
  const [countOne, incOne, decOne, resOne] = useCounter();
  
  return (
    <div>
      <h1>Count # {countOne}</h1>
      <button onClick={incOne}>Inc</button>
      <button onClick={decOne}>Dec</button>
      <button onClick={resOne}>Res</button>
    </div>
  );
}

export default CounterOne;