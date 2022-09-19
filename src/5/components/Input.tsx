import { ChangeEvent, FunctionComponent} from 'react';

interface InputProps {
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<InputProps> = ({ value, onChange }) => {

  return (
    <div>
      <label>Search Input: </label>
      <input
        value={value}
        placeholder="Search"
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
