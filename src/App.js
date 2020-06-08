import React, { useState } from 'react';
import './App.css';
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Jobs from "./page/Jobs";
import Detail from "./page/Detail"
import Login from "./page/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Row, Col } from 'react-bootstrap';

function App() {
  let [user, setUser] = useState(false)

  const ProtectedRoute = (props) => {
    if(user === true) {
      return <Route {...props} />
    } else {
      return <Redirect to="/login" />
    }
  }

  return (
    <div>
      <div className="navbar">
          <Navbar>
            <Navbar.Brand>
              <Link to="/">
                <img className="navLogo" id="logo" src="./itviec-logo.png" alt="itviec-logo"></img>
              </Link>
            </Navbar.Brand>
          </Navbar>
      </div>

      <Switch>
        <ProtectedRoute path="/jobs/:id" render={(props) => <Detail {...props} />} />
        <Route path="/jobs/:id" component={Detail} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Jobs} />
      </Switch>
    </div>
  );
}

export default App;
