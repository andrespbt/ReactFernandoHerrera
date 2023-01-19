import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');

describe('Tests on TodoApp', () => {
	useTodos.mockReturnValue({
		todos: [
			{ id: 1, description: 'todo', done: false },
			{ id: 2, description: 'todo2', done: true },
		],
		todosCount: 2,
		pendingTodosCount: 1,
		handleDeleteTodo: jest.fn(),
		handleNewTodo: jest.fn(),
		handleToggleTodo: jest.fn(),
	});

	test('should show the component correctly', () => {
		render(<TodoApp />);
		expect(screen.getByText('TodoApp 2,')).toBeTruthy();
		expect(screen.getByText('pending: 1')).toBeTruthy();
		expect(screen.getByText('todo')).toBeTruthy();
		expect(screen.getByText('todo2')).toBeTruthy();
		expect(screen.getByRole('textbox')).toBeTruthy();
	});
});
