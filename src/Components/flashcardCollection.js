import React from 'react';

const FlashcardCollection = (props) => {
    return (
       <thead>
           <tr>
               <th></th>
           </tr>
           {props.mapCollections()}
           {props.mapFlashcards()}
        

       </thead>

        
          
            
      
            
      
    )
}

export default FlashcardCollection;