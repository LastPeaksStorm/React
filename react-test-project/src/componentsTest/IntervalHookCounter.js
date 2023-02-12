import React, {useState, useEffect} from 'react';

function IntervalHookCounter() {
  const [count, setCount] = useState(0);
  
  const tick = () => {
    setCount(prevState => prevState + 1);
  }
  
  useEffect(() => {
    const inc = setInterval(tick, 1000);
    
    return () => {
      clearInterval(inc);
    };
  }, []);
  
  return (
    <h1>
      {count}
    </h1>
  );
}

export default IntervalHookCounter;