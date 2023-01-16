import { render, screen, fireEvent, renderHook, waitFor } from '@testing-library/react';
import { useState } from 'react';
import { GiftExpertApp } from '../src/GiftExpertApp';

describe('Tests on <GiftExpertApp/>', () => {
	test('should show initial state', () => {
		render(<GiftExpertApp />);
		expect(screen.getByText('GiftExpertApp')).toBeTruthy();
		expect(screen.getByText('Dragon Ball Z')).toBeTruthy();
		expect(screen.getByText('Loading...')).toBeTruthy();
	});

	test('should not add existing category', () => {
		render(<GiftExpertApp />);
		const { result } = renderHook(() => useState('Dragon Ball Z'));
		console.log(result);
		const [categories] = result.current;
		console.log(categories);
	});
});
