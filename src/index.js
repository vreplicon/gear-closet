import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <App data={data}/>
    </BrowserRouter>,
 document.getElementById('root'));

