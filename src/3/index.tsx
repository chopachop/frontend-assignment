import { ChangeEvent, FunctionComponent, useMemo, useState } from 'react';

const Task3: FunctionComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([
    "Jonas Tranberg",
    "Kurt Gammelgaard Nielsen",
    "Ann Berry",
    "Andreas Koefoed-Hansen",
    "Rasmus Blok",
    "Rikke Heisz Nielsen",
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
      <label>Search Input: </label>
      <input
        placeholder="Search"
        onChange={handleChange}
      />

      <br />
      <br />

      <ul>
        {filteredItems.map(item =>
          <li key={item} >
            {item}
          </li>
        )}
      </ul>
    </div>
  );
};

export default Task3;