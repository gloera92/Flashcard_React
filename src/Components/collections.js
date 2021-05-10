import React from 'react';

const Collections= (props) => {
    console.log("collections")
    return (
        <thead>
           <h1> {props.collections.collection} </h1>
        </thead>   
    )
}

    export default Collections;