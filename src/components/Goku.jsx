import goku from '../images/goku.png';
import countHits from '../hoc/countHits';
import PropTypes from 'prop-types'
import CustomBtn from '../customComponent/CustomBtn';
import CustomTable from '../customComponent/CustomTable';

const Goku = ({ name, addOneHit, hocState, life }) => {


    const lifeValue = life > 0 ? <td>{life} %</td> : <td><span className='badge badge-danger'>Mort</span></td>;


    return (
        <div className="col">
        <img src={goku} alt='Vegeta' height='400px'/>
        <br />

        {  life > 0 ? <CustomBtn clickHandler={addOneHit} classes='btn btn-success m-3'>{`${name} Frappe`}</CustomBtn> :
          <CustomBtn classes='btn btn-danger m-3 disabled'>Mort</CustomBtn>  }

        <CustomTable life={lifeValue} hocStateObj={hocState}/>

      </div>
    )
  
}
Goku.propTypes = {
    name: PropTypes.string,
    life: PropTypes.number,
    addOneHit: PropTypes.func,
    hocState: PropTypes.number
    
}

const GokuWithHits =  countHits(Goku, 20)

export default GokuWithHits;