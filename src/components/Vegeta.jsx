import vegeta from '../images/vegeta.jpg';
import countHits from '../hoc/countHits';
import PropTypes from 'prop-types'
import CustomBtn from '../customComponent/CustomBtn';
import CustomTable from '../customComponent/CustomTable';

const Vegeta = ( {name, addOneHit, hocState, life } ) => {

    
    const lifeValue = life > 0 ? <td>{life} %</td> : <td><span className='badge badge-danger'>Mort</span></td>;


    return (
      <div className="col">
        <img src={vegeta} alt='Vegeta' height='400px'/>
        <br />

        { life > 0 ? <CustomBtn clickHandler={addOneHit} classes='btn btn-success m-3'>{`${name} Frappe`}</CustomBtn> :
          <CustomBtn classes='btn btn-danger m-3 disabled'>Mort</CustomBtn> }

        
      <CustomTable life={lifeValue} hocStateObj={hocState}/>
      </div>
    )
  
}

Vegeta.propTypes = {
    name: PropTypes.string,
    life: PropTypes.number,
    addOneHit: PropTypes.func,
    hocState: PropTypes.number

    
    
}

const VegetaWithHits =  countHits(Vegeta, 10);

export default VegetaWithHits;


