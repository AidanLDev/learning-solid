import { Component, createSignal, createEffect } from 'solid-js';
import Header from './components/Header';
import Counter from './components/Counter';
import List from './components/List';

const listItems = ['Item one', 'Item two', 'Item three'];


const App: Component = () => {
  const [count, setCount] = createSignal(0);
  console.log('App render'); //  Only runs once

  const doubleCounter = () => count() * 2;

  createEffect(() => {
    // Could send fetch reqs here
    console.log('Effect - executes because counter updated', count());
  });

  return (
    <div class='wrapper'>
      {' '}
      {/*  just called class in Solid  */}
      <Header />
      <Counter countValue={count()} />
      <p id='counter'>{doubleCounter()}</p>
      {/*  Initialise signal with ()  */}
      <div id='actions'>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>{' '}
        {/*  Access prevState easily  */}
        <button onclick={() => setCount(() => count() + 1)}>
          +
        </button>{' '}
        {/* onclick or onClick work in solid */}
      </div>
      <List listItems={listItems} />
    </div>
  );
};

export default App;
