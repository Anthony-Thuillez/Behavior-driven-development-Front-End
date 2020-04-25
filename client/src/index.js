import React from 'react';
import ReactDOM from 'react-dom';
import WebFontLoader from 'webfontloader'
import './reset.css';
import App from './App';

WebFontLoader.load({
  google: {
    families: [
      'Roboto:300,400,900:latin-ext',
      'Anton',
    ]
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 