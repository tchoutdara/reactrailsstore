import React, { Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import NoMatch from './components/NoMatch'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => (
  <Fragment>
    <NavBar />
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/about" component={About} />
    <Route component={NoMatch} />
  </Switch>
  </Fragment>
)

export default App
