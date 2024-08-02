type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
};
const Counter = ({ setCount, children }: CounterProps) => {
  return (
    <div>
      <h2 className='text-xl font-bold'>{children}</h2>
      <button
        className='bg-black rounded p-4 text-white'
        onClick={() => setCount((count) => count + 1)}>
        {" "}
        +{" "}
      </button>
      <button
        className='bg-black rounded p-4 text-white'
        onClick={() => setCount((count) => count - 1)}>
        {" "}
        -{" "}
      </button>
    </div>
  );
};
export default Counter;
