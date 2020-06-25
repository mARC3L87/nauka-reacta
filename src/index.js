//external
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
//css
import './styles/normalize.scss';
import './styles/global.scss';
//js
import App from './components/App/App';
//data
import store from './redux/store';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
