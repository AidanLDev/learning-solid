import { For } from 'solid-js';

interface ListProps {
  listItems: string[];
}
{
  /*  Using For to loop through an array  */
}
const List = (props: ListProps) => {
  return (
    <ul>
      <For each={props.listItems}>
        {(item, idx) => (
          <li>
            {`${idx()}.`} {item}
          </li>
        )}
      </For>
    </ul>
  );
};

export default List;
