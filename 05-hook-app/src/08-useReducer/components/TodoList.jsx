import { TodoItem } from './TodoItem';

export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
	return (
		<ul className="list-group">
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					onDeleteTodo={onDeleteTodo}
					onToggleTodo={onToggleTodo}
					todo={todo}
				/>
			))}
		</ul>
	);
};
