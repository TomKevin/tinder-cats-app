import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Defining Route Components
import Index from './components/Index';
import ShowCat from './components/cats/Show';
import Favourites from './components/favourites/Index';
import NotFound from './components/NotFound';

const App = () => {

  return (

    <Router>

      <Switch>

        <Route path="/" exact strict component={Index} />

        <Route path="/cats/:id" exact strict component={ShowCat} />

        <Route path="/favourites" exact strict component={Favourites} />

        <Route path="*" exact strict component={NotFound} />

      </Switch>

    </Router>

  );

}

export default App;
