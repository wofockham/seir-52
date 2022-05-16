import React, { useState } from 'react';

const Echo = (props) => {
    const [message, setMessage] = useState('');

    return (
        <div>
            <h2>{ message }</h2>
            <input onInput={ (e) => setMessage(e.target.value) } value={ message } placehlder="Your message here" />
        </div>
    );
}

export default Echo;