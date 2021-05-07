// import React from 'react';

// function FilterCollections(props) {
//     let collections = [
//         {
//             id: {props.collections.id},
            
//         }
//     ];
    
//     let flashcards = [
//         {
//             id: props.flashcard.id,
//             word: props.flashcard.word,
//             definition: props.flashcard.definition,
//             collection: props.flashcard.collection,
//         }
//     ];

//     for (let i = 0; i < collections.length; i++){
//         let filteredFlashcards = flashcards.filter((flashcards) => {
//             if (props.flashcards.collection === collections[i].id) {
//                 return true;
//             }else{
//                 return false;
//             }
//         });

//         console.log(collections[i].collection);
//         console.log(filteredFlashcards)
//     }
// }

// export default FilterCollections;