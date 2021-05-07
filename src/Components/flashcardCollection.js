import React from 'react';

const FlashcardCollection = (props) => {
    return (
        <table className="table">
            <thead>
                React Collection
                <tr>
                    <th>Id</th>
                    <th>Word</th>
                    <th>Definition</th>
                </tr>
            </thead>
            {props.mapCollections()}
            <thead>
            Python Collection
                <tr>
                    <th>Id</th>
                    <th>Word</th>
                    <th>Definition</th>
                </tr>
            </thead>
            {props.mapCollections()}
        </table>
    )
}

export default FlashcardCollection;