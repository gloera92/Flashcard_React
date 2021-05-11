import React from 'react';
import FlashcardCollection from './FlashcardCollection/flashcardCollection';

const Collections = (props) => {
    console.log("collections")
    return (
        <thead>
            
            
           <button onClick={() => props.setStack(props.collections.id)} >{props.collections.collection} collection</button>
        </thead>   
    )
}

    export default Collections;