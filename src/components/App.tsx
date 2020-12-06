import React from 'react';
import Header from './partials/Header';
import Card from './partials/Card';
import Change from './partials/Change';
import '../assets/styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Card />
        <Change />
      </div>
    </div>
  );
}

export default App;
