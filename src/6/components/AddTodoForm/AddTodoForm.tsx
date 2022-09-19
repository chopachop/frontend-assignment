import React, { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { addTodo } from '../../redux/slicers/todoSlice';
import './addTodoForm.scss'


const AddTodoForm: FC = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (value) {
      setError(false)
      dispatch(
        addTodo({
          title: value
        })
      );
      return setValue('');
    }
    setError(true);
  };

  return (
    <form className='form__todo'>
      <button onClick={onSubmit} type='submit' className='btn create'>
        +
      </button>

      <input
        type='text'
        className={`new-todo ${error ? 'new-todo__error' : 'new-todo__ok'}`}
        placeholder='Add todo...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </form>
  );
};

export default AddTodoForm;