import { useId } from "react";

const NewsLetter = () => {

    const id = useId()

    const container = {
        background: 'PaleGoldenrod',
        padding: '19px',
        width: '60%',
        margin: '9px auto',
        border: '1px solid dashed'
    }
    return (
        <div style={container}>
            <label htmlFor={id}>Inscrivez vous à la Newsletter </label>
            <div>
                <input 
                type="email" 
                id={id} 
                name="react"
                placeholder="Votre email" />
               
            </div>
        </div>
    );
};

export default NewsLetter;