import React, {Component} from 'react';
import axios from 'axios';
import Flashcard from './flashcard';
import AddFlashcard from './addFlashcard';
import FlashcardCollection from './flashcardCollection';
// import FilterCollections from './filterCollections';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcards: [],
            collections: []
        }
    }

    componentDidMount() {
        console.log("component mounted");
        this.getAllFlashcards();
    }

    async getAllFlashcards(){
        let response = await axios.get('http://127.0.0.1:8000/flashcard_app/');
        this.setState({
            flashcards: response.data,        
        })
        console.log("get flashcards")
    }

    async getAllCollections() {
        let response = await axios.get('http://127.0.0.1:8000/flashcard_app/')
        this.setState({
            flashcards: response.collection
        })
        console.log("getcollections")
    }

    // mapFlashcards(){
    //     console.log("mapflashcards")
    //     return this.state.flashcards.map(flashcard => 
    //         <Flashcard
    //             key={flashcard.id}
    //             flashcard={flashcard}
    //         />    
    //     );
    // }

    mapCollections() {
        console.log("mapcollections")
        return this.state.flashcards.map(flashcard =>
            <Flashcard
                key={flashcard.id}
                flashcard={flashcard}
            />
        );
    }

    async addFlashcard(flashcard){
        await axios.post('http://127.0.0.1:8000/flashcard_app/', flashcard);
        this.getAllFlashcards()
    }



    render(){
        return(
            <div>
            <FlashcardCollection  mapCollections={() => this.mapCollections()} /> 
            <AddFlashcard addFlashcard={this.addFlashcard.bind(this)} />
            <FilterCollections getAllFlashcards={this.getAllFlashcards.bind(this)} />



            </div>
        )
    }

    
}
export default App;