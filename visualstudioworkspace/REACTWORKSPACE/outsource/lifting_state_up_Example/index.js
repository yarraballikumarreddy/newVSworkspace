import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TemperatureInput from './Sharestate';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
     <TemperatureInput />,
    document.getElementById('root'));   

registerServiceWorker();
