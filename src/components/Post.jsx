import React from 'react';

export default function Post(props) {
    const { id, name, removePost } = props;

    return (
        <h2>{name}<button onClick={() => removePost(id)}>Delete</button></h2>
    );
}