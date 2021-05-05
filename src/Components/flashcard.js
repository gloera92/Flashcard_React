import React from 'react';

const Flashcard = (props) => {
    console.log(props)
    return(
        <div className="card">
            <div className="card-body">
            <h4 className="card-title">Word</h4>
            <p className="card-text">Word Defintion</p>
            </div>
        </div>
    )};

    export default Flashcard;