import { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { toggleComplete, deleteTodo } from '../../redux/slicers/todoSlice';
import './todoItem.scss';

interface TodoItemProps {
  id: string,
  title: string,
  completed: boolean,
}

const TodoItem: FC<TodoItemProps> = ({ id, title, completed }) => {
  const dispatch = useAppDispatch();

  const handleComplete = () => {
    dispatch(
      toggleComplete({ id: id, completed: !completed })
    );
  };

  const handleDelete = () => {
    dispatch(
      deleteTodo({ id: id }),
    );
  };

  return (
    <li className='task'>
      <input
        type='checkbox'
        checked={completed}
        className='checkmark'
        onChange={handleComplete}
      />
      <div className='task__content'>
        <div>
          {title}
        </div>
        <button
          onClick={handleDelete}
          className='btn delete'
        >
          Delete
        </button>
      </div>

    </li>
  );
};

export default TodoItem;