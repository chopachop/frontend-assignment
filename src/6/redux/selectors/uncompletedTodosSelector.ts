import { RootState } from '../store';


export const uncompletedTodosSelector = (state: RootState) =>
state.todos.filter((todo) => todo.completed === false)