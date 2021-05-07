import React from 'react';

const Flashcard = (props) => {
    console.log(props)
    return(
        <tbody>
            <tr>
                <td>{props.flashcard.id}</td>
                <td>{props.flashcard.word}</td>
                <td>{props.flashcard.definition}</td>
                <td>{props.flashcard.collection}</td>
                
                
            </tr>
            <tr>
                <td>{props.flashcard.collection}</td>
            </tr>
        </tbody>
    )};

    export default Flashcard;