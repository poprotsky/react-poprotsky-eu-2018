import React, { Component } from 'react'

import { Link, Route, Switch, Redirect } from 'react-router-dom'

import Home from './containers/Home/'
import Portfolio from './containers/Portfolio/'
import Project from './containers/Project/'
import About from './containers/About/'
import Contact from './containers/Contact/'
import NotFound from './containers/NotFound/'

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/portfolio/:project' component={Project} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    )
  }
}
