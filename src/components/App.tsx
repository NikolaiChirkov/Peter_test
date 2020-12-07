import React from 'react';
import Header from './partials/Header';
import Card from './partials/Card';
import Change from './partials/Change';
import History from './partials/History';
import CardChange from './partials/CardChange';
import Loading from '../assets/svg/loading.svg';
import '../assets/styles/App.css';
import { useDataContext } from './functional/Data';

function App() {
  const { loading, users } = useDataContext();

  if (loading) {
    return <section className="loading">
      <img className="loading-img" src={Loading} alt="" />
      <h1>Загрузка...</h1>
    </section>
  }
 
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