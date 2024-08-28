import { useRef, useState } from "react";

const Input = () => {
    
    const [name, setName] = useState(null)

     const usernameRef = useRef(null)

     

     const handleSubmit = () => {
        setName(usernameRef.current.value)
            
        
     }

    return (
      <div>
        <p>{name}</p>
        <input ref={usernameRef} type="text" />
        <button onClick={handleSubmit}>Valider</button>
      </div>
    );
};

export default Input;