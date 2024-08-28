import React from "react";

const Bouton = ({increment, btnColor, children, handleClick}) => {
    return (
       <button className={`btn btn-${btnColor} m-3`} onClick={() =>handleClick(increment)}> {children} +  {increment}%</button>
    );
};

export default React.memo(Bouton);