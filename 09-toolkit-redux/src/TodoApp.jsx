import { useState } from 'react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1);
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId > 0) setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todo RTK Query</h1>
      <hr />

      <h4>Is Loading {isLoading ? 'true' : 'false'}</h4>

      <pre>{JSON.stringify(todo)}</pre>

      <button onClick={prevTodo}>Prev Todo</button>
      <button onClick={nextTodo}>Next Todo</button>

      {/* <ul>
        {todos.map(({ userId, title, id, completed }) => (
          <li key={id}>
            <strong>{completed ? 'DONE' : 'PENDING'}</strong>
            {title}
          </li>
        ))}
      </ul> */}
    </>
  );
};
