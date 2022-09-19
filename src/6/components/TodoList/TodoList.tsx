import { FC } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import { todoSelector } from '../../redux/selectors/todosSelector';
import { useAppSelector } from '../../hooks/useAppSelector';
import { TransitionGroup } from 'react-transition-group';
import { Collapse } from '@mui/material';
import './todolist.scss';



const TodoList: FC = () => {
  const todos = useAppSelector(todoSelector);

  return (
    <ul className='todo-list'>
      <TransitionGroup>
        {todos.map((todo) => (
          <Collapse key={todo.id}>
            <TodoItem
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          </Collapse>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default TodoList;