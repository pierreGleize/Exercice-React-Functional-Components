import { useId } from 'react'

const NameFileds = () => {

    const id = useId()

    return (
        <>
         <label htmlFor={`${id}-firtsname`}>Prénom</label>
            <div>
                <input type="text" id={`${id}-firtsname`}/> 
            </div>

         <label htmlFor={`${id}-name`}>Nom</label>
            <div>
                <input type="text" id={`${id}-name`}/> 
            </div>

         <label htmlFor={`${id}-age`}>Age </label>
            <div>
                <input type="number" id={`${id}-age`}/> 
            </div>
           
        </>
    );
};

export default NameFileds;