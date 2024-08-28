import { useEffect, useState } from 'react';
import useUpdateDocTitle from '../hooks/useUpdateDocTitle';

const ClickSayHello = () => {

    const [text, setText] = useState('')
    const [isTrue, setIsTrue] = useState(true)

    useEffect(() => {
        if (isTrue) {
            setText('Bonjour')
        }else{
            setText('Bonsoir')
        }
    }, [isTrue])

    //Custom Hooks
    useUpdateDocTitle(text)
    
    return (
       <button onClick={() => setIsTrue(!isTrue)}>Cliquez</button>
    )
};

export default ClickSayHello;