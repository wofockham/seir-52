import React from 'react';

class HelloUser extends React.Component {
    render() {
        console.log(this.props);
        return (
            <h2>Hello { this.props.name || 'mystery user' }</h2>
        );
    }
}

export default HelloUser;