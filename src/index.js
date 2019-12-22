import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Canvas from './components/Canvas';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Canvas />, document.getElementById('root'));
serviceWorker.unregister();
