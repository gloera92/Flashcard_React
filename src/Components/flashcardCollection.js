import React from 'react';

const FlashcardCollection = (props) => {
    return (
        <table className="table">
            {props.mapCollections()}
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Word</th>
                    <th>Definition</th>
                    <th>Collection</th>
                </tr>
            </thead>
                {props.mapFlashcards()}
        </table>  
      
    )
}

export default FlashcardCollection;