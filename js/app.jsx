import React from 'react';
import { DefaultRoute, Link, Route, RouteHandler, NotFoundRoute } from 'react-router';
import LoginHandler from './handlers/LoginHandler.jsx';
import AnimalHandler from './handlers/AnimalHandler.jsx';
import Router from 'react-router';

console.log("app attack");

export default class App extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link to="app">Little Ranger</Link>
        <br />
        <Link to="login">Login</Link>
        <br />
        <Link to="animals">Animals</Link>
        <RouteHandler/>
      </div>
    );
  }
}

export const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="login" path="/login" handler={LoginHandler}/>
    <Route name="animals" path="/animals" handler={AnimalHandler}/>
  </Route>

);

const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

router.run((Handler, state) => {
  React.render(<Handler {...state}/>, document.getElementById('Application'));
});
