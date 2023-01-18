import { useTodos } from '../hooks/useTodos';
import { TodoAdd } from './components/TodoAdd';
import { TodoList } from './components/TodoList';

export const TodoApp = () => {
	const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodos();

	return (
		<>
			<h1>
				TodoApp {todosCount}, <small>pending: {pendingTodosCount}</small>
			</h1>
			<hr />

			<div className="row">
				<div className="col-7">
					<TodoList
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					/>
				</div>

				<div className="col-5">
					<h4>Agregar TODO</h4>
					<hr />
					<TodoAdd handleNewTodo={handleNewTodo} />
				</div>
			</div>
		</>
	);
};
