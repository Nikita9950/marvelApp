import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/HomeSearch/HomeSearch';
import CharacterComics from './components/CharacterComics/CharacterComics';

function App(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/comics/:characterId" component={CharacterComics} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
