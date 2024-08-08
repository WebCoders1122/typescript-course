import { ChangeEvent, useReducer, useState } from "react";

const initialState = {
  count: 0,
  text: "",
};
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  TEXT,
}
type reducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};
const App = () => {
  //reducer
  const reducer = (state: typeof initialState, action: reducerAction) => {
    switch (action.type) {
      case REDUCER_ACTION_TYPE.INCREMENT:
        return { ...state, count: state.count + 1 };
      case REDUCER_ACTION_TYPE.DECREMENT:
        return { ...state, count: state.count - 1 };
      case REDUCER_ACTION_TYPE.TEXT:
        return { ...state, text: action.payload ?? "" };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //handle change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.TEXT, payload: e.target.value });
  };
  return (
    <div>
      <h1 className='text-2xl'>Counter = {state.count}</h1>
      <button
        className='bg-blue-600 rounded px-4 py-2 mx-2 my-4'
        onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })}>
        Increment
      </button>
      <button
        className='bg-blue-600 rounded px-4 py-2 mx-2 my-4'
        onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })}>
        Decrement
      </button>
      <br />
      <input
        onChange={handleChange}
        type='text'
        className='mx-4'
      />
      <br />
      <h2 className='text-2xl my-2'>{state.text}</h2>
    </div>
  );
};
export default App;
