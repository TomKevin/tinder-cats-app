import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// Defining Route Components
import Index from './components/Index';

const App = () => {

  return (

    <Router>

      <Switch>

        <Route path="/" exact strict component={Index} />

      </Switch>

    </Router>

  );

}

export default App;
