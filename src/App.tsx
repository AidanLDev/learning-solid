import { Component, createSignal, createEffect } from 'solid-js';
import Header from './components/Header';

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  console.log('App render'); //  Only runs once

  createEffect(() => {
    console.log('Effect');
    // Could send fetch reqs here
    console.log('Effect - executes because counter updated', count());
  });
  return (
    <div class='wrapper'>
      {' '}
      {/*  just called class in Solid  */}
      <Header />
      <p id='counter'>{count()}</p>{' '}
      {/*  Initialise signal with ()  */}
      <div id='actions'>
        <button onClick={() => setCount(prev => prev - 1)}>-</button>{' '}
        {/*  Access prevState easily  */}
        <button onclick={() => setCount(() => count() + 1)}>
          +
        </button>{' '}
        {/* onclick or onClick work in solid */}
      </div>
    </div>
  );
};

export default App;
