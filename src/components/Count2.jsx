import React from "react";

const Count2 = ({count, bgColor}) => {

    const progress = {width: `${count}%`}

    return (
       <>
       <p className="h1">{count}%</p>
       <div className="progress">
            <div className={`progress-bar progress-bar-striped bg-${bgColor}` }        role="progressbar" style={progress}>
            </div>
        </div>
       
       </>
    );
};

export default React.memo(Count2);