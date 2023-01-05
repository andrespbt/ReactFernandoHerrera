import PropTypes from 'prop-types';
export const FirstApp = ({title, subTitle}) => {

  return (
    <>
        <h1>{title}</h1>
        <h2>My name is Andres</h2>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired

}