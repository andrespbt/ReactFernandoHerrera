import { render, screen } from '@testing-library/react';
import { GiftItem } from '../../src/components/GiftItem';

describe('Test on GiftItem', () => {
	const title = 'Goku';
	const url = 'https://goku.com/';

	test('should match the snapshot', () => {
		const { container } = render(
			<GiftItem
				title={title}
				url={url}
			/>
		);

		expect(container).toMatchSnapshot();
	});

	test('should show the image with url and alt correctly', () => {
		render(
			<GiftItem
				title={title}
				url={url}
			/>
		);

		const { src, alt } = screen.getByRole('img');
		expect(src).toBe(url);
		expect(alt).toBe(title);
	});

	test('should show title in component', () => {
		render(
			<GiftItem
				title={title}
				url={url}
			/>
		);
		expect(screen.getByText(title)).toBeTruthy();
	});
});
