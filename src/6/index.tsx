import { FC } from 'react';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';
import TotalCompletedItems from './components/TotalCompletedItems/TotalCompletedItems';
import './index.scss';

const Task6: FC = () => {
  return (
    <div className='task-6'>
      <header className='todo__header'>
        <h1 className='todo__title'>My Tasks</h1>
        <TotalCompletedItems />
      </header>

      <TodoList />
      <AddTodoForm />
    </div>
  );
};

export default Task6;
