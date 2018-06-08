import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import Favicon from 'react-favicon'
import FaviconImg from 'Assets/images/favicon.png'

import Routes from '../../routes'

import data from 'Assets/data.json'

import Header from '../../containers/Header/'
import Footer from '../../containers/Footer/'

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Favicon url={FaviconImg} />
        <Header data={data}/>
        <main className='main'>
          <Routes />
        </main>
        <Footer data={data} />
      </div>
    )
  }
}
