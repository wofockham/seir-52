import React from 'react';

// Functional components: good when you don't need state.
// Think of it as just the render method.
// It just returns JSX.
// No `this`.

const Gallery = (props) => {
    console.log(props);
    return (
        <div>
            { props.images.map((url) => <img src={url} key={url} />) }
        </div>
    );
};

export default Gallery;