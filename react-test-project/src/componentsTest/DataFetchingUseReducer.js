import React, {useEffect, useReducer} from 'react';
import axios from "axios";

const initialState = {
  loading: true,
  post: {},
  error: ''
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: ''
      }
    case 'FETCH_FAIL':
      return {
        loading: false,
        post: {},
        error: 'Went wrong fetching the data'
      }
    default:
      return state;
  }
}

function DataFetchingUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  useEffect( () => {
    axios.get('https://google.com')
      .then(response => {
        dispatch({type: 'FETCH_SUCCESS', payload: response.data});
      })
      .catch(err => {
        dispatch({type: 'FETCH_FAIL'});
      });
  }, []);
  
  
  return (
    <div>
        {state.loading ? 'Loading...' : state.post.title}
        {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingUseReducer;