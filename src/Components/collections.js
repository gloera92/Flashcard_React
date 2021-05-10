import React from 'react';

const Collections= (props) => {
    console.log("collections")
    return (
        <thead>
            <h1>Collections</h1>
           <h2>{props.collections.collection}</h2> 
           {props.mapFlashcards}
         
        </thead>   
    )
}

    export default Collections;