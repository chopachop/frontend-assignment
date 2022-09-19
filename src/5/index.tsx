import { ChangeEvent, FunctionComponent, useMemo, useState } from 'react';
import Input from './components/Input';
import List from './components/List';

const Task4: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([
    'Jonas Tranberg',
    'Kurt Gammelgaard Nielsen',
    'Ann Berry',
    'Andreas Koefoed-Hansen',
    'Rasmus Blok',
    'Rikke Heisz Nielsen',
  ]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const filteredItems = useMemo(() => {
    return inputValue
      ? items.filter(item => item.includes(inputValue))
      : items;
  }, [inputValue, items]);

  return (
    <div>
      <Input
        value={inputValue}
        onChange={handleChange}
      />
      <br />
      <List filteredItems={filteredItems} />
    </div>
  );
};

export default Task4;
