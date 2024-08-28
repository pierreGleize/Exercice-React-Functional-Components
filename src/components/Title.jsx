import  { useRef } from 'react';

const Title = () => {
console.log('Title chargé')
    const h1Renders = useRef(0)

    setInterval(() => {
        // h1Renders.current ++
        // console.log(h1Renders.current)
    }, 1000)

    return (
        <div>
            {h1Renders.current}
        </div>
    );
};

export default Title;