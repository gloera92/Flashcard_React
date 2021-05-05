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






    render(){
        return(
            <div>
             <Flashcard />


            </div>
        )
    }

    
}
export default App;