import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Test on useCounter', () => {
	test('should return default values', () => {
		const { result } = renderHook(() => useCounter());
		const { counter, increment, decrement, reset } = result.current;

		expect(counter).toBe(10);
		expect(decrement).toEqual(expect.any(Function));
		expect(increment).toEqual(expect.any(Function));
		expect(reset).toEqual(expect.any(Function));
	});

	test('should return counter value of 100', () => {
		const { result } = renderHook(() => useCounter(100));
		const { counter } = result.current;

		expect(counter).toBe(100);
	});

	test('should increment the counter', () => {
		const { result } = renderHook(() => useCounter(100));
		const { counter, increment } = result.current;

		act(() => {
			increment(1);
			increment(2);
		});

		expect(result.current.counter).toBe(103);
	});

	test('should decrement the counter', () => {
		const { result } = renderHook(() => useCounter(100));
		const { counter, decrement } = result.current;

		act(() => {
			decrement(1);
			decrement(2);
		});

		expect(result.current.counter).toBe(97);
	});

	test('should reset the counter to the initial value', () => {
		const { result } = renderHook(() => useCounter(100));
		const { counter, reset, decrement } = result.current;

		act(() => {
			decrement(1);
			decrement(2);
			reset();
		});

		expect(result.current.counter).toBe(100);
	});
});
