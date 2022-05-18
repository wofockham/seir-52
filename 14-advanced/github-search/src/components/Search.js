import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = (props) => {
    const [username, setUsername] = useState(''); // array destructuring, with '' as default value
    const navigate = useNavigate();

    const _handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/profile/${ username }`);
    };

    return (
        <div>
            <h2>Search Github by username</h2>
            <form onSubmit={ _handleSubmit }>
                <label>
                    Username:
                    <input onInput={ (event) => setUsername(event.target.value) } required />
                </label>
                <button>Search for { username }</button>
            </form>
        </div>
    )
};

export default Search;