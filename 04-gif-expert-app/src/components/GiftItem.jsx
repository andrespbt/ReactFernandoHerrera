import PropTypes from 'prop-types';

export const GiftItem = ({ title, url }) => {
	return (
		<div className="card">
			<img
				src={url}
				alt={title}
				height="275"
				width="275"
			/>
			<p>{title}</p>
		</div>
	);
};

GiftItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
};

/* Tarea 

	1.Añadir proptypes

		.Title obligatorio
		.url obligatorio

	2. Evaluar snapshot


*/
