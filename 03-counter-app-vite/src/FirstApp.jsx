import PropTypes from 'prop-types';
export const FirstApp = ({ title, subTitle, name }) => {
	if (!title) {
		throw new Error('El titulo no existe');
	}
	return (
		<>
			<h1 data-testid="test-title">{title}</h1>
			<h2>{subTitle}</h2>
			<h2>{name}</h2>
		</>
	);
};

FirstApp.propTypes = {
	subTitle: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
};

// FirstApp.defaultProps = {
// 	subTitle: 12345,
// 	title: 'No hay titulo',
// };
