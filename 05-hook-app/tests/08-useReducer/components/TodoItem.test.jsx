import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../../src/08-useReducer/components/TodoItem';
describe('Tests on TodoItem', () => {
	const todo = {
		id: 1,
		description: 'Piedra del Alma',
		done: false,
	};

	const onDeleteTodoMock = jest.fn();
	const onToggleTodoMock = jest.fn();

	beforeEach(() => jest.clearAllMocks());

	test('should show pending TODO  to complete', () => {
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const liElement = screen.getByRole('listitem');

		expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

		const span = screen.getByLabelText('span');
		expect(span.className).toContain('align-self-center ');
		expect(span.className).not.toContain('text-decoration-line-through');
	});

	test('should show complete TODO', () => {
		todo.done = true;
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const span = screen.getByLabelText('span');
		expect(span.className).toContain('text-decoration-line-through');
	});

	test('span should call ToggleTodo onclick', () => {
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const span = screen.getByLabelText('span');
		fireEvent.click(span);

		expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
	});

	test('button should call DeleteTodo onclick', () => {
		render(
			<TodoItem
				todo={todo}
				onDeleteTodo={onDeleteTodoMock}
				onToggleTodo={onToggleTodoMock}
			/>
		);

		const button = screen.getByRole('button');
		fireEvent.click(button);

		expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
	});
});
