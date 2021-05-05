import React, {Component} from'react';

class AddFlashcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            definition: '',
            collection: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const flashcard = {
            word: this.state.word,
            definition: this.state.definition,
            collection: this.state.collection,
        }
        this.props.addFlashcard(flashcard);
        this.setState({
            word: '',
            definition: '',
            collection: '',
        })
    }

    render(){
        return (
            <div>
                <h1> Add Flashcard</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-align">
                        <div className="col-md-4">
                            <label>Word</label>
                            <input type="text" name="word" value={this.state.word}
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Definition</label>
                            <input type="text" name="definition" value={this.state.definition}
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <label>Collection</label>
                            <input type="text" name="collection" value={this.state.collection}
                            onChange={this.handleChange} />
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Add Flashcard"/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddFlashcard;