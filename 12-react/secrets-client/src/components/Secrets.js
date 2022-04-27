import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/secrets.json'; // Later: change this to the deployed URL

class Secrets extends Component {
    constructor() {
        super();
        // dummy/seed data -- to be replaced by AJAX
        this.state = {
            secrets: [{"id":1,"content":"I like the smell of fishtanks","url":"http://localhost:3000/secrets/1.json"},{"id":2,"content":"I lick doorknobs","url":"http://localhost:3000/secrets/2.json"},{"id":3,"content":"I didn't lick all the mayonnaise off the spoon before stirring your coffee","url":"http://localhost:3000/secrets/3.json"}]
        };
        this.saveSecret = this.saveSecret.bind(this);
    }

    saveSecret(content) {
        // TODO: explain why this needs to be an arrow function
        // you can't just AJAX anywhere
        axios.post(SERVER_URL, { content: content }).then((response) => {
            console.log(response);
        });
        // this.setState({secrets: [newSecret, ...this.state.secrets]});
    }

    render() {
        return (
            <div>
                <h1>Tell us all your secrets...</h1>
                <SecretForm onSubmit={ this.saveSecret }/>
                <SecretList secrets={ this.state.secrets } />
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
        this.props.onSubmit(this.state.content);
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

// Functional components: always expect/accept `props`
const SecretList = (props) => {
    return (
        <div>
            <p>{ props.secrets.length } secrets</p>
            { props.secrets.map((s) => <p key={s.id}>{ s.content }</p>) }
        </div>
    );
};

export default Secrets;