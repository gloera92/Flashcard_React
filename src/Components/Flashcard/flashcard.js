import React from 'react';

const Flashcard = (props) => {
    console.log(props)
    return(
        <tbody>
            <tr>
                
                <td>{props.flashcard.word} </td>
                <td>{props.flashcard.definition}</td>
            </tr>                  
        </tbody>
    )};

    export default Flashcard;