import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';
import { initializeApp } from 'firebase/app';


const config = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

// const firebase = window.firebase.initializeApp(config);

const firebase  = initializeApp(config)

ReactDOM.render(
    <FirebaseContext.Provider value={{firebase: firebase}}>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
