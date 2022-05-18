import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Github from '../services/github';

const Profile = (props) => {
    const params = useParams();
    const [userInfo, setUserInfo] = useState(null);
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        Github.getUserInfo( params.username ).then((result) => {
            setUserInfo(result.data);
        });

        Github.getUserRepos( params.username ).then((result) => {
            setRepos(result.data);
        });
    }, [params.username]);

    return (
        <div>
            <h2>Profile for { params.username }</h2>
            <div style={ {display: 'flex'} }>
                <UserInfo info={userInfo} />
                <Repositories repos={repos} />
            </div>
        </div>
    );
};

const UserInfo = (props) => {
    if (props.info === null) {
        return (<div>Loading...</div>);
    }

    const { login, avatar_url, bio, followers, following, public_repos, public_gists } = props.info;
    return (
        <div>
            <h3>Stats for { login }</h3>
            <img src={ avatar_url } alt={ login } width="200" />
            <p>Bio: { bio }</p>
            <p>Followers: { followers }</p>
            <p>Following: { following }</p>
            <p>Public repos: { public_repos }</p>
            <p>Public gists: { public_gists }</p>
        </div>
    );
};

const Repositories = (props) => {
    if (props.repos === null) {
        return (<div>Loading...</div>);
    }

    const userRepos = props.repos.map((r) => (
        <li key={ r.id }>
            <a href={ r.html_url } target="_blank">
                { r.name }
            </a>
        </li>
    ));

    return (
        <div>
            <h3>Repos</h3>
            <ul>
                { userRepos }
            </ul>
        </div>
    );
};

export default Profile;