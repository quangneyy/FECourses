import React from 'react';
import ReactDOM from 'react-dom/client';
import { ParallaxProvider } from 'react-scroll-parallax';
import App from './App';
import Scroll from './Components/Scroll/Scroll';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ParallaxProvider>
    <App />
    </ParallaxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
