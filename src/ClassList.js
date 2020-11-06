import React from 'react';
import Class from './Class';

const ClassList = ({ classes }) => {
    return (
        <div>
            {
            classes.map((user, i) => {
                return (
                            <Class 
                                key={i} 
                                id={classes[i].id} 
                                name={classes[i].name} 
                                url={classes[i].url}
                                power_type={classes[i].power_type}
                                />
                        );
                    })
            }
        </div>
    );
}

export default ClassList;