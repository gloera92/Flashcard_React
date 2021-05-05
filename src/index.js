import React from 'react';
import ReactDom from 'react-dom';
import App from './Components/app';


const jsxElement = <h1>Test</h1>;
console.log(jsxElement);

ReactDom.render(<App />, document.getElementById('root'));