import { Show } from 'solid-js';

interface CounterProps {
  countValue: number;
}

const Counter = (props: CounterProps) => {
  return (
    <>
      <p id='counter'>{props.countValue}</p>
      <Show when={props.countValue === 10}>
        <h2>Count is 10!!!</h2>
      </Show>
    </>
  );
};

export default Counter;
