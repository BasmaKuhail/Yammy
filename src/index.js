import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase'; 

const firebaseConfig = {
  apiKey: "AIzaSyBd-dOo6POAQrM_U-ML8y7m0iitQD_AzEA",
  authDomain: "recipes-b62d1.firebaseapp.com",
  databaseURL: "https://recipes-b62d1.firebaseio.com",
  projectId: "recipes-b62d1",
  storageBucket: "recipes-b62d1.appspot.com",
  messagingSenderId: "289500571116",
  appId: "1:289500571116:web:0bbe23ed371cf901504cc9",
  measurementId: "G-G8HJV4QVDM"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
