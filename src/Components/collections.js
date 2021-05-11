import React from 'react';


const Collections = (props) => {
    console.log("collections")
    return (
        <thead>
            
           <button onClick={() => props.setStack(props.collections.id)} >{props.collections.collection} collection</button>
        </thead>   
    )
}

    export default Collections;