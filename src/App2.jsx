
import { useCallback, useState } from 'react'
import Goku from './components/Goku'
import Vegeta from './components/Vegeta'
import PropTypes from 'prop-types'

const App2 = () =>  {


    const [vegeta, setVegeta] = useState(100)
    const [goku, setGoku] = useState(100)
  
//Option 1
//  const reduceLife = useCallback((param, param2) => {
//     if (param === 'Vegeta'){
//         setGoku(prevLife => prevLife - param2)
//     }else if (param === 'Goku'){
//         setVegeta(prevLife => prevLife - param2)
//     }
//   }, [setVegeta, setGoku])

//Option 2
 const reduceLife = useCallback((param, param2) => {
    const characterToUpdate = param === 'Goku' ? setVegeta : setGoku;
    characterToUpdate(prevLife => prevLife -param2)
    
  }, [setVegeta, setGoku])

    return (
      <div className='container text-center'>
        <h1>Goku Vs Vegeta</h1>
        <hr />
        <div className='row'>
          <Vegeta name="Vegeta" life={vegeta} reduceHandler={reduceLife} />
          <Goku name="Goku" life={goku} reduceHandler={reduceLife} />
        </div>
      </div>
    )
  
}

App2.propTypes = {
    reduceLife: PropTypes.func,
}


export default App2
