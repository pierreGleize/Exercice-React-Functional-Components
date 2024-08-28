import {useState, useEffect, useRef} from 'react';

const Input2 = () => {

    const [count, setCount] = useState(0)

    const setIntervalRef = useRef(null)

    useEffect(() => {
        setIntervalRef.current = setInterval(() => {
            setCount(prevCount => {
                return prevCount +1
            })
        }, 1000)

        return () =>{
            clearInterval(setIntervalRef.current)
        }
    }, [])

    const stopInterval = () => {
        if (setIntervalRef.current){
            clearInterval(setIntervalRef.current)
            setIntervalRef.current = null
        }
        
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={stopInterval}>Stop</button>
        </div>
    );
};

export default Input2;