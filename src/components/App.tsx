import React from 'react';
import Header from './partials/Header';
import Card from './partials/Card/Card';
import Change from './partials/Change/Change';
import History from './partials/History/History';
import CardChange from './partials/CardChange/CardChange';
import LoadingComponent from './partials/LoadingComponent';
import '../assets/styles/App.css';
import { useDataContext } from './context/Data';

const App = () => {
  const { loading } = useDataContext();

  if (loading) {
    return (
      <LoadingComponent />
    )
  }
 
  return (
    <div className="app">
      <Header />
      <div className="container">
        {/* <Card /> */}
        <Change />
        {/* <History /> */}
      </div>
      <CardChange />
    </div>
  );
}

export default App;