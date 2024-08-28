import { useEffect, useState } from 'react';

const FunctionCount = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
   

    //Option 1
    // const handleClick = () =>{
    //     setCount(prevState =>  prevState +1
    //     )
    // }

    //Option 2 
    const handleClick = () =>{
        setCount(count +1)
    }

    useEffect(() =>{
        console.log('hello')
        setTimeout(() =>{
             document.title = `Vous avez cliqué ${count} fois`
        }, 1000)
        
    }, [count]) // 2eme paramètre est un array, s'exécute seulement si il y a une modification(= componentditupdate), si je met un array vide elle s'exécute 1 seule fois(= componentdidmount)

    return (
        <div>
            <h2>{count}</h2>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={handleClick}>Cliqué composant type function</button>
        </div>
    );
};

export default FunctionCount;