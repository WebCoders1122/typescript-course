import { useCounterContext } from "./context/CounterContext";

const App = () => {
  const { count, increment, decrement, handleChange, text } =
    useCounterContext();
  return (
    <div>
      <h1 className='text-2xl'>Counter = {count}</h1>
      <button
        className='bg-blue-600 rounded px-4 py-2 mx-2 my-4'
        onClick={increment}>
        Increment
      </button>
      <button
        className='bg-blue-600 rounded px-4 py-2 mx-2 my-4'
        onClick={decrement}>
        Decrement
      </button>
      <br />
      <input
        onChange={handleChange}
        type='text'
        className='mx-4'
      />
      <br />
      <h2 className='text-2xl my-2'>{text}</h2>
    </div>
  );
};
export default App;
