import { FunctionComponent } from 'react';

interface ItemProps {
  item: string
}

const Item: FunctionComponent<ItemProps> = ({ item }) => {
  return (
    <li>
      {item}
    </li>
  );
};

export default Item;
