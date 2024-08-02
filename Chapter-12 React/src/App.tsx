import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import Section from "./components/Section";
import List from "./components/List";

export default function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <Heading title='Hello World' />
      <Section title='my title'>this is my section</Section>
      <Counter setCount={setCount}>this is count: {count}</Counter>
      <List
        listItems={["Hello", "World", "Always"]}
        renderItem={(item: string) => (
          <span className='text-blue-900'>{item}</span>
        )}
      />
      <List
        listItems={[1, 2, 3]}
        renderItem={(item: number) => (
          <span className='text-blue-900'>{item}</span>
        )}
      />
    </div>
  );
}
