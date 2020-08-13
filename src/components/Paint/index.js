import React, { useState } from 'react';
import'./styles.scss';
const colors = ['red', 'blue', 'green', 'orange', 'black'];

const Paint = () => {
    const [color, setColor] = useState(colors[0]);

    const paperClickHandler = () => {
        const ri = Math.floor(Math.random() * colors.length);
        setColor(colors[ri]);
    };

    return (
        <div className='paint-container'>
            <div className='paper' style={{backgroundColor: color}} onClick={paperClickHandler}>

            </div>
        </div>
    );
};

export default Paint;