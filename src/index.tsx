import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './assets/styles/index.css';
import { DataProvider } from './components/context/Data';

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
