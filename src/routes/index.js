import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Home from './home';
import Editor from './editor';
import NotFound from './notFound';

const App = () => {
  return (
    <Router>
      <div id="router">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/editor" component={Editor} />
            <Route path="/notFound" component={NotFound} />
            <Redirect to="/notFound" />
          </Switch>
      </div>
    </Router>
  );
};

export default App;
