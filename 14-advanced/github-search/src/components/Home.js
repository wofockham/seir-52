import React from 'react';
import _ from 'underscore';

import { Link, useNavigate } from 'react-router-dom';

const Home = (props) => {
    const navigate = useNavigate();
    const _gotoRandomUser = () => {
        const students = ['curisse',
        'alexwjohnson',
        'a1364t',
        'branyflores',
        'danimart1357',
        'Dhaya94',
        'edwalters99',
        'elizaargh',
        'ebeecroft1',
        'jaqueelizandro',
        'oldbettie',
        'Josephhu706',
        'Happy-Hunter',
        'kendlc',
        'kristabel-wong',
        'Tenzang',
        '123mandy',
        'mehranfalahati',
        'MrDrops',
        'Philwatson77',
        'rodsejas',
        'Sam660320',
        'Lyndating'];

        const randomStudent = _(students).sample();
        navigate(`/profile/${ randomStudent }`);
    };

    return (
        <div>
            <h1>Github Search</h1>

            <Link to="/search">
                <button>Search for a user</button>
            </Link>

            <button onClick={ _gotoRandomUser }>Random User</button>
        </div>
    );
};

export default Home;