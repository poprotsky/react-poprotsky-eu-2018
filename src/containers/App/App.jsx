import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import Favicon from 'react-favicon'
import FaviconImg from 'Assets/images/favicon.png'

import Routes from '../../routes'

import data from 'Assets/data.json'

import Header from '../../containers/Header/'
import Footer from '../../containers/Footer/'

import ReactGA from 'react-ga';

ReactGA.initialize('UA-60592089-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export default class App extends Component {
  // componentDidMount() {
  //   setTimeout( () => {
  //     document.querySelector('.preloader').classList.add('is-hidden')
  //   }, 500 );
  // }
  navOpen = () => {
    document.querySelector('.app').classList.toggle('nav-is-open')
  }
  hasClass = (element, cls) => {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
  navOverlayClose = (e) => {
    if(this.hasClass(document.querySelector('.app'), 'nav-is-open')) {
      if(e.target.className !== 'header__nav-toggle') {
        document.querySelector('.app').classList.remove('nav-is-open')
      }
    }
  }
  render() {
    return (
      <div className='app' onClick={this.navOverlayClose}>
        {/* <div className='preloader'>
          <div className='preloader__inner'>
            <h2 className='preloader__title'>Poprotsky</h2>
            <p className='preloader__subtitle'>UI/UX/Web design &amp; UI development</p>
          </div>
        </div> */}
        <Favicon url={FaviconImg} />
        <Header data={data} onClickFn={this.navOpen}/>
        <main className='main'>
          <Routes />
        </main>
        <Footer data={data} />
      </div>
    )
  }
}
