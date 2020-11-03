import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import 'antd/dist/antd.css';
import './index.css'
import {store} from './store/index'
import {Provider} from 'react-redux'
ReactDOM.render(
    <Provider>
     <App store={store}></App>
     </Provider>, 
     document.getElementById('root')
);

