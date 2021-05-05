import axios from 'axios';
import React, {Component} from 'react';
import Flashcard from './Flashcard/flashcard';



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






    render(){
        return(
            <div>
             <Flashcard flashcard={this.getAllFlashcards.bind(this)}/>


            </div>
        )
    }

    
}
export default App;