import React from 'react';

const Profile2 = ({profile, count}) => {

    return (
        <div>
           <ul className="list-group">
            <li className="list-group-item"><p className='h3'>User Id: {count}</p></li>
            <li className="list-group-item"><strong>Name: {profile.name}</strong></li>
            <li className="list-group-item"><strong>Pseudo: {profile.username}</strong></li>
            <li className="list-group-item"><strong>Email: {profile.email}</strong></li>
           </ul>
        
        </div>
    );
};

export default React.memo(Profile2);