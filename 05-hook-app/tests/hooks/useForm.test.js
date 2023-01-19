import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Tests on useForm', () => {
	const initialForm = {
		name: 'Andres',
		email: 'andrespbt14@hotmail.com',
	};

	test('should return the default values', () => {
		const { result } = renderHook(() => useForm(initialForm));

		expect(result.current).toEqual({
			name: initialForm.name,
			email: initialForm.email,
			formState: initialForm,
			onInputChange: expect.any(Function),
			setFormState: expect.any(Function),
			onResetForm: expect.any(Function),
		});
	});

	test('should change the name on the form', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { onInputChange } = result.current;
		const newValue = 'Juan';

		act(() => {
			onInputChange({ target: { name: 'name', value: newValue } });
		});

		expect(result.current.name).toBe(newValue);
		expect(result.current.formState.name).toBe(newValue);
	});

	test('should reset the form to default values', () => {
		const { result } = renderHook(() => useForm(initialForm));
		const { onInputChange, onResetForm } = result.current;
		const newValue = 'Juan';

		act(() => {
			onInputChange({ target: { name: 'name', value: newValue } });
			onResetForm();
		});

		expect(result.current.name).toBe(initialForm.name);
		expect(result.current.formState.name).toBe(initialForm.name);
	});
});
