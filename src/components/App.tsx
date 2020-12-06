import React from 'react';
import Header from './partials/Header';
import Card from './partials/Card';
import Change from './partials/Change';
import History from './partials/History';
import CardChange from './partials/CardChange';
import '../assets/styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Card />
        <Change />
        <History />
      </div>
      <CardChange />
    </div>
  );
}

export default App;
