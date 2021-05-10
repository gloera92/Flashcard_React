import React, {Component} from 'react';
import axios from 'axios';
import Flashcard from './flashcard';
import AddFlashcard from './addFlashcard/addFlashcard';
import FlashcardCollection from './flashcardCollection';
import Collections from './collections';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flashcards: [],
            collections: [],
            currentStack: []
        }
        this.setStack = this.setStack.bind(this);
    }

    componentDidMount() {
        this.getAllCollections();
        this.getAllFlashcards();
        console.log("component mounted");
    }


    setStack(id){
        let currentStack = this.state.flashcards.filter(function(flashcard){
            if(flashcard.collection == id){
                return true;
            }
            else{
                return false;
            }
        })
        this.setState({
            currentStack: currentStack
        })
    }

    async getAllFlashcards(){
        let response = await axios.get('http://127.0.0.1:8000/flashcard_app/');
        this.setState({
            flashcards: response.data,        
        })
        console.log("get flashcards")
    }

    async getAllCollections() {
        let response = await axios.get(`http://127.0.0.1:8000/flashcard_app/collection/ `)
        this.setState({
            collections: response.data,
        })
        console.log("getcollections", this.state.collections)    
    }

    mapFlashcards(id){
        console.log("mapflashcards")
        return this.state.currentStack.map(flashcard => 
            <Flashcard
                key={flashcard.collections}
                flashcard={flashcard}
            />    
        );
    }

    mapCollections(){
        console.log("mapcollections", this.state.collections)
        return this.state.collections.map(collections => 
            <Collections 
            key={collections.id}
            collections={collections}
            mapFlashcards={this.mapFlashcards()}
            setStack = {this.setStack}
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
            <FlashcardCollection mapCollections={() => this.mapCollections()} mapFlashcards={() => this.mapFlashcards()}  /> 
            <AddFlashcard addFlashcard={this.addFlashcard.bind(this)} />
           

            </div>
        )
    }

    
}
export default App;