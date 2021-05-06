import React, {Component} from 'react';
import axios from 'axios';
import Flashcard from './flashcard';
import AddFlashcard from './addFlashcard';
import FlashcardCollection from './flashcardCollection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcards: []
        }
    }

    componentDidMount() {
        console.log("component mounted");
    }

    async getAllFlashcards(){
        let response = await axios.get('http://127.0.0.1:8000/flashcard_app/');
        this.setState({
            flashcards: response.data
        })
        console.log("get flashcards")
    }

    mapFlashcards(){
        console.log("mapflashcards")
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
            <FlashcardCollection flashcards={this.getAllFlashcards.bind(this)} flashcard={() => this.getAllFlashcards()} mapFlashcards={() => this.mapFlashcards()} /> 
            <AddFlashcard addFlashcard={this.addFlashcard.bind(this)} />


            </div>
        )
    }

    
}
export default App;