import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app_folder/app';
import 'bootstrap/dist/css/bootstrap.css';

const jsxElement = <h1>Test</h1>;
console.log(jsxElement);

ReactDom.render(<App />, document.getElementById('root'));