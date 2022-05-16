import React, { useState } from 'react';

const Clickr = (props) => {
    const [clicks, setClicks] = useState(0);

    const _handleClick = () => {
        setClicks(clicks + 1);
    };

    return (
        <button onClick={ _handleClick }>
            { clicks } clicks so far
        </button>
    );
};


export default Clickr;