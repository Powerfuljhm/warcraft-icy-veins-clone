import React from 'react';

const Class = ({ name, power_type, url, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <div>
                <h2>{name}</h2>
                <p>{url}</p>
                <p>{power_type}</p>
            </div>      
        </div>
    );
}

export default Class;