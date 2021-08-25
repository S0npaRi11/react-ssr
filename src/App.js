// import logo from './logo.svg';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import Avengers from './Pages/Avengers'
import Details from './Pages/Details'
import Error500 from './Pages/error500';

function App() {
  return (
    <Router basename="tv-shows">
      <Switch>

        <Route exact path="/">
          <Redirect to="/avengers"/>
        </Route>

        <Route exact path='/avengers'>
          <Avengers />
        </Route>

        <Route exact path='/details/:id'>
          <Details />
        </Route>

        <Route exact path="/error500">
          <Error500 />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
