import {useState, useRef, useEffect, useLayoutEffect} from 'react'
import Content from './Content';


const Box = () => {

const [height, setHeight] = useState(100)

const boxRef = useRef(null)

useLayoutEffect(() => {
    if(boxRef.current.offsetHeight < 150){
        setHeight(height +100)
    }
}, [height])

const boxStyle = {
    wodth: '400px',
    height: `${height}px`,
    margin: '0 auto',
    backgroundColor: height > 100 ? 'red' : 'blue'
}

    return (
        <div ref={boxRef} style={boxStyle}>
            {`height: ${height}`}
            <Content />
        </div>
    );
};

export default Box;