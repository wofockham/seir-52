import React, { Component } from 'react';

class Secrets extends Component {
    render() {
        return (
            <div>
                <h1>Tell us all your secrets...</h1>
                <SecretForm />
                <SecretList />
            </div>
        );
    }
}

class SecretForm extends Component {
    constructor() {
        super();
        this.state = { content: '' };
        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(event) {
        this.setState({content: event.target.value});
    }

    _handleSubmit(event) {
        event.preventDefault();
        console.log('secret told', this.state.content);
        // TODO: call the prop passed in from parent (do the favour)
        this.setState({ content: '' }); // clear the form
    }

    render() {
        return (
            <form onSubmit={ this._handleSubmit }>
                <textarea onChange={ this._handleChange } value={ this.state.content }></textarea>
                <input type="submit" value="Tell" />
            </form>
        );
    }
}

const SecretList = (props) => {
    return (
        <div>
            secrets list coming soon
        </div>
    );
};

export default Secrets;