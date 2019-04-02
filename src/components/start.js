import React from 'react';
import './start.css';

const Start = ({value, size = 15}) => {

    return ( 
        <div className="start" style={{width: size*5, height: size, backgroundSize: size}}>
            <div className="startTop" style={{width: `${value * 10}%`, backgroundSize: size}}>

            </div>
        </div>
     );
}
 
export default Start; 