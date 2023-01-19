import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Tests on todoReducer', () => {
	const initialState = [
		{
			id: 1,
			description: 'InitialState',
			done: false,
		},
	];

	test('should return the initial state', () => {
		const newState = todoReducer(initialState, {});

		expect(newState).toBe(initialState);
	});

	test('should add a TODO', () => {
		const action = {
			type: '[TODO] Add Todo',
			payload: {
				id: 1,
				description: 'InitialState',
				done: false,
			},
		};

		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(2);
		expect(newState).toContain(action.payload);
	});

	test('should delete a TODO', () => {
		const action = {
			type: '[TODO] Remove Todo',
			payload: 1,
		};

		const newState = todoReducer(initialState, action);

		expect(newState.length).toBe(0);
	});

	test('should realize the toggle on TODO', () => {
		const action = {
			type: '[TODO] Toggle Todo',
			payload: 1,
		};

		const newState = todoReducer(initialState, action);

		expect(newState[0].done).toBe(true);
	});
});
