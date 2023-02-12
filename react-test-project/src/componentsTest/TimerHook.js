import React, {useState, useEffect, useRef} from 'react';

function TimerHook() {
  const intervalRef = useRef();
  const [timer, setTimer] = useState(0);
  let msg = 's';
  
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer(prevState => prevState + 1)
    }, 100);
    
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  
  return (
    <div>
      <h2>{timer}</h2>
      <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval (Stop Timer)</button>
      <h1>{msg}</h1>
    </div>
  );
}

export default TimerHook;