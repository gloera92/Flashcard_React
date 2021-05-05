import axios from 'axios';
import React, {Component} from 'react';
import AddFlashcard from './addFlashcard';
import Flashcard from './flashcard';


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
        let response = await axios.get('http://127.0.0.1:8000/flashcard_app');
        this.setState({
            flashcards: response.data
        })
        console.log("get flashcards")
    }

    mapFlashcards(){
        return this.state.flashcards.map(flashcard => 
            <Flashcard
                key={flashcard.id}
                flashcard={flashcard}
            />    
        );
    }

    async addFlashcard(flashcard){
        await axios.post('http://127.0.0.1:8000/flashcard_app/', flashcard)
        this.getAllFlashcards()
    }






    render(){
        return(
            <div>
            <Flashcard flashcard={this.getAllFlashcards.bind(this)}/>
            <AddFlashcard addFlashcard={this.addFlashcard.bind(this)} />

            </div>
        )
    }

    
}
export default App;