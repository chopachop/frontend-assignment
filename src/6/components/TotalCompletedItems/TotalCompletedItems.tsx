import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { uncompletedTodosSelector } from '../../redux/selectors/uncompletedTodosSelector';

const TotalCompletedItems: FC = () => {
  const uncompletedTodos = useAppSelector(uncompletedTodosSelector);

  return (
    <h2 className='completed-tasks__text'>Uncompleted tasks left: {uncompletedTodos.length}</h2>
  )
}

export default TotalCompletedItems