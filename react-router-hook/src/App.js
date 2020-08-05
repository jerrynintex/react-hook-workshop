import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  withRouter,
} from "react-router-dom";
import { Post, RoutePost } from './Post'
import { Users } from './Users'
import { Home } from './Home'
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/post/component">Component</Link>
            </li>
            <li>
              <Link to="/post/withRouter">WithRouter</Link>
            </li>
            <li>
              <Link to="/users/7456/xys12">Hooks</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/post/:slug" component={Post} />
          <Route path="/post/:slug">
            <RoutePost />
          </Route>
          <Route path="/users/:id/:hash">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

