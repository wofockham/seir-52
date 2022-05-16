const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // destructuring
const { buildSchema } = require('graphql');

const sounds = require('./martin.json');

// schema
const schema = buildSchema(`
    type Query {
        sound(id: Int): SoundEffect,
        sounds(description: String): [SoundEffect]
    },
    type SoundEffect {
        sound: String,
        description: String,
        source: String,
        title: String
    }
`);

// resolver
const getSound = ({ id }) => sounds[id]; // destructuring
const getSounds = ({ description }) => {
    if (description) {
        description = description.toLowerCase();
        return sounds.filter((s) => s.description.toLowerCase().includes(description));
    } else {
        return sounds;
    }
};

const root = {
    sound: getSound,
    sounds: getSounds
};

// tie it all together
const server = express();
server.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

server.listen(4000, () => console.log('http://localhost:4000/graphql'));
