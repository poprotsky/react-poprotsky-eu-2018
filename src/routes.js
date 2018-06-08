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
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='*' component={NotFound} />
      </Switch>
    )
  }
}
