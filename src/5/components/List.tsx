import { FunctionComponent } from 'react';
import Item from './Item';

interface ListProps {
  filteredItems: string[]
}

const List: FunctionComponent<ListProps> = ({ filteredItems }) => {
  return <div>
    <ul>
      {filteredItems.map((item: string, key) =>
        <Item item={item} />
      )}
    </ul>
  </div>;
};

export default List;
