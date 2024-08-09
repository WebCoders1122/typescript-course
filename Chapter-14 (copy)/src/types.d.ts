type ContextTSType = {
  count: number;
  increment: () => void;
  decrement: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
};

type reducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

type StateType = {
  count: number;
  text: string;
};
