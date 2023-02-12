import {useState} from 'react';

function useCounter(initState = 0, crementValue = 1) {
  const [value, setValue] = useState(initState);
  const increment = () => {
    setValue(prevState => prevState + crementValue);
  }
  const decrement = () => {
    setValue(prevState => prevState - crementValue);
  }
  const reset = () => {
    setValue(initState);
  }
  
  return [value, increment, decrement, reset];
}

export default useCounter;