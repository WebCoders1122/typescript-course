import { ChangeEvent, ReactElement, createContext, useReducer } from "react";
import { useContext } from "react";

//enums
enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  TEXT,
}
//initial value of context
const initialValue: ContextTSType = {
  count: 0,
  increment: () => undefined,
  decrement: () => undefined,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => undefined,
  text: "",
};
// initial state
const initialState: StateType = {
  count: 0,
  text: "",
};
const CounterContext = createContext(initialValue);
export const useCounterContext = () => useContext(CounterContext);

export default function CounterContextProvider({
  children,
}: {
  children: ReactElement;
}) {
  //reducer
  const reducer = (state: StateType, action: reducerAction) => {
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

  //increment and decrement
  const increment = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  };

  //handle change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.TEXT, payload: e.target.value });
  };
  return (
    <CounterContext.Provider
      value={{
        count: state.count,
        increment: increment,
        decrement,
        handleChange,
        text: state.text,
      }}>
      {children}
    </CounterContext.Provider>
  );
}
