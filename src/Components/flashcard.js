import React from 'react';

const Flashcard = (props) => {
    console.log(props)
    return(
        <tbody>
            <tr>
                <td>{this.props.flashcard.id}</td>
                <td>{props.flashcards.title}</td>
                <td>{props.flashcard.collection}</td>
            </tr>
        </tbody>
    )};

    export default Flashcard;