import React, { Component } from 'react';
import axios from 'axios'; // yay 0.24.0

class NumberFacts extends Component {
    constructor() {
        super();
        this.state = {
            facts: []
        };

        this._fetchFact = this._fetchFact.bind(this);
    }

    _fetchFact() {
        axios.get('http://www.numbersapi.com/random/trivia?json').then((response) => {
            const newFacts = [response.data.text, ...this.state.facts]; // ... is the spread operator
            this.setState({facts: newFacts});
        });
    }

    render() {
        // arrow functions have an implicit return if you leave off the { curlies }
        return (
            <div>
                <h1>Numberwang!</h1>
                <button onClick={ this._fetchFact }>Fetch fact</button>
                { this.state.facts.map((fact) => <p>{ fact }</p>) }
            </div>
        )
    }
};

export default NumberFacts;