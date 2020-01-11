import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import * as firebase from 'firebase'; 


const firebaseConfig = {
  apiKey: "AIzaSyCXX8hp81_yiptvIDyKch-i_F39nBe4FcM",
  authDomain: "yammy-c473e.firebaseapp.com",
  databaseURL: "https://yammy-c473e.firebaseio.com",
  projectId: "yammy-c473e",
  storageBucket: "yammy-c473e.appspot.com",
  messagingSenderId: "635335262399",
  appId: "1:635335262399:web:84214970715909beb2460a",
  measurementId: "G-Q1J13KHJYY"
};


firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
