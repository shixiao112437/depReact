import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'
import 'antd/dist/antd.css';
import './index.css'
import  {store}  from './store/index'
import { Provider } from 'react-redux'
// ReactDOM.render(<Provider store={store}><App></App></Provider>, document.getElementById('root')
// );
ReactDOM.render(<Provider store={store}>
      <App />
    </Provider>
    ,
  document.getElementById('root')
)
