import React from 'react';

const FilterCollections = (props) => {
        let collections = [
            {
                id: 1,
                collection: 'React'
            },
            {
                id: 2,
                collection: 'Python'
            }
        ];

        let flashcards = [
            {
                id: 1,
                word: 'Component',
                definition: 'small reusable UI element',
                collection: 1,
            },
            {
                id:2,
                word: 'Django',
                definition: 'web app framework',
                collection: 2,
            }
        ];

        for (let i=0; i< collections.length; i++){
            let filteredFlashCards = flashcards.filter((flashcard) => {
                if(flashcard === collections[i].id){
                    return true;
                }else{
                    return false;
                }
            });
            console.log(filteredFlashCards)
        }   
}

    export default FilterCollections;