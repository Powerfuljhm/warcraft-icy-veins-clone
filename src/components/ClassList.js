import React from 'react';
import Class from './Class';

const ClassList = ( { classes } ) => {
    return (
        <div>
            {
            classes.map((user, i) => {
                return (
                            <Class 
                                key={i} 
                                id={classes[i].id} 
                                name={classes[i].name} 
                                email={classes[i].email}
                                />
                        );
                    })
            }
        </div>
    );
}

export default ClassList;