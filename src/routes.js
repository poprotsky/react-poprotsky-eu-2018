import React, { Component } from 'react'

import { Link, Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Home from './containers/Home/'
import Portfolio from './containers/Portfolio/'
import Project from './containers/Project/'
import About from './containers/About/'
import Contact from './containers/Contact/'
import NotFound from './containers/NotFound/'

@withRouter
export default class Routes extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.onRouteChanged()
    }
  }

  onRouteChanged() {
    window.scrollTo(0,0)

    console.log("ROUTE CHANGED")
  }

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
