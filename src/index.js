import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import { Provider } from './context_store/ContextAPI'


axios.defaults.baseURL = 'https://marketplace-estore-backend.herokuapp.com//'
// axios.defaults.baseURL = 'http://localhost:8080/'

ReactDOM.render(
  <React.StrictMode>
        <Provider>
            <App />
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
