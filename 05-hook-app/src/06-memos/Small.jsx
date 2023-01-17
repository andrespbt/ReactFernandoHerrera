import { memo } from 'react';

export const Small = memo(({ value }) => {
	console.log('Renderizando');
	return <small>{value}</small>;
});
