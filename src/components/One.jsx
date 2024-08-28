import PropTypes from 'prop-types'

const One = ({name, age}) => {
    return (
        <>
        <p>{`${name} a ${age} ans`}</p>
        <p>{`L'année prochaine,${name} aura ${age +1} ans`}</p>
        </>
    );
};

One.propTypes = {
    name:PropTypes.string ,
    age: PropTypes.number.isRequired
}

export default One;