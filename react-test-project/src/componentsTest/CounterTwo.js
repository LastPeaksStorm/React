import React from 'react';
import useCounter from "./useCounter";

function CounterTwo() {
  const [countTwo, incTwo, decTwo, resTwo] = useCounter(10, 10);
  
  return (
    <div>
      <h1>Count # {countTwo}</h1>
      <button onClick={incTwo}>Inc</button>
      <button onClick={decTwo}>Dec</button>
      <button onClick={resTwo}>Res</button>
    </div>
  );
}

export default CounterTwo;