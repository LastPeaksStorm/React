import {useState} from 'react';

function useInput(initState) {
  const [value, setValue] =  useState(initState);
  
  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value);
    }
  }
  
  const reset = () => {
    setValue(initState);
  }
  
  return [value, bind, reset];
}

export default useInput;