import React from 'react';
import './flashcardCollection'

const FlashcardCollection = (props) => {
    return (
        <table className="table">
            {props.mapCollections()}
            <thead>
                <tr>
                    
                    
                </tr>
            </thead>
                {props.mapFlashcards()}
        </table>  
      
    )
}

export default FlashcardCollection;