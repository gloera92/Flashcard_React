import React from 'react';

const Collections = (props) => {
    console.log("collections")
    return (
        <thead>
            <h1>Collections</h1>
           <h2>{props.collections.collection}</h2> 
           <button onClick={() => props.setStack(props.collections.id)}>setActiveStack</button>
        </thead>   
    )
}

    export default Collections;