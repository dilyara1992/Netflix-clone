import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {GlobalStyles} from './global-styles';
import reportWebVitals from './reportWebVitals';
import { FirebaseContext } from './context/firebase';
import { initializeApp } from 'firebase/app';


const config={
  apiKey: "AIzaSyAlWg6UhUfjzci79m_kqUaxEgwT1RWI8jA",
  authDomain: "netflix-clone-ec090.firebaseapp.com",
  projectId: "netflix-clone-ec090",
  storageBucket: "netflix-clone-ec090.appspot.com",
  messagingSenderId: "214865636283",
  appId: "1:214865636283:web:9b6ce17aa0ed5cf458b29e"
}

const firebase = initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles/>
      <App/>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
