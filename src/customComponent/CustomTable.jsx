import PropTypes from 'prop-types'

const CustomTable = ({life, hocStateObj}) => {
    return (
        <table className='table table-striped'>
          <thead>
              <tr>
                  <th scope='col'> Coups</th>
                  <th scope='col'> Vie</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{hocStateObj}</td>
                  { life }
              </tr>
          </tbody>
      </table>
    );
};

CustomTable.propTypes = {
    life: PropTypes.node.isRequired,
    hocStateObj: PropTypes.number
}

export default CustomTable;