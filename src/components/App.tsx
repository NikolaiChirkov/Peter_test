import React from 'react';
import '../assets/styles/App.css';
import Header from './partials/Header';
import Card from './partials/Card';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Card />
      </div>
    </div>
  );
}

export default App;
