export const nextQuote = url => {
	fetch(url)
		.then(resp => resp.json())
		.then(data => {
			const { author, quote } = !!data && data[0];
			document.querySelector('p.mb-1').innerText = quote;
			document.querySelector('footer.blockquote-footer').innerText = author;
		});
};
