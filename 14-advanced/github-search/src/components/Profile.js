import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = (props) => {
    const params = useParams();
    return (
        <div>
            { params.username }
        </div>
    );
};

export default Profile;