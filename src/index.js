import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './App';
import { FirebaseContext } from './context/firebase';
import { initializeApp } from 'firebase/app';


const config = {
  apiKey: "AIzaSyAlWg6UhUfjzci79m_kqUaxEgwT1RWI8jA",
  authDomain: "netflix-clone-ec090.firebaseapp.com",
  projectId: "netflix-clone-ec090",
  storageBucket: "netflix-clone-ec090.appspot.com",
  messagingSenderId: "214865636283",
  appId: "1:214865636283:web:9b6ce17aa0ed5cf458b29e"
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
