import { useState } from "react";


const FunctionState = () => {

    const [counter, setCounter] = useState(0)

    const addOne = () =>{
        setCounter( prevCounter => prevCounter +1)
    }

    return (
        <div>
            <p>Function State: {counter}</p>
            <button onClick={addOne}>Ingrémenter avec Function State</button>
        </div>
    );
};

export default FunctionState;