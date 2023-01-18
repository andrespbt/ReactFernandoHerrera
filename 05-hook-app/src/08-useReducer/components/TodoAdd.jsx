import { useState } from 'react';

export const TodoAdd = ({ handleNewTodo }) => {
	const [value, setValue] = useState('');

	const onInputChange = ({ target: { value } }) => {
		setValue(value);
	};

	const onNewTodo = e => {
		e.preventDefault();

		if (!value.trim().length > 1) {
			return;
		}

		handleNewTodo({
			id: new Date().getTime(),
			description: value,
			done: false,
		});

		setValue('');
	};

	return (
		<form
			onSubmit={onNewTodo}
			aria-label="form">
			<input
				type="text"
				placeholder="¿Qué hay que hacer?"
				className="from-control"
				onChange={onInputChange}
				value={value}
			/>

			<button
				type="submit"
				className="btn btn-outline-primary mt-1">
				Agregar
			</button>
		</form>
	);
};
