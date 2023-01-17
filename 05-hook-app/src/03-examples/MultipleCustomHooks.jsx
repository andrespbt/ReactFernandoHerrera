import { nextQuote } from '../helpers/nextQuote';
import { useFetch } from '../hooks/useFetch';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
	const url = 'https://api.breakingbadquotes.xyz/v1/quotes';

	const { data, hasError, isLoading } = useFetch(url);

	const { author, quote } = !!data && data[0];

	return (
		<>
			<h1>Breaking Bad quotes</h1>
			<hr />
			{isLoading && <LoadingQuote />}
			{!isLoading && (
				<Quote
					author={author}
					quote={quote}
				/>
			)}

			{data && (
				<button
					className="btn btn-primary"
					onClick={() => nextQuote(url)}>
					Next quote
				</button>
			)}
		</>
	);
};
