import React, { Component } from 'react'
import { Link, Route, Switch, Redirect } from 'react-router-dom'
import Favicon from 'react-favicon'
import FaviconImg from 'Assets/images/favicon.png'

import Routes from '../../routes'

import data from 'Assets/data.json'
import contactData from 'Assets/contact.json'

import Header from '../../containers/Header/'
import Footer from '../../containers/Footer/'

import ReactGA from 'react-ga';

ReactGA.initialize('UA-60592089-1');
ReactGA.pageview(window.location.pathname + window.location.search);

export default class App extends Component {
  componentDidMount() {
    const backToTopEl = document.querySelector('.back-to-top')
    const preloaderEl = document.querySelector('.preloader')

    setTimeout( () => {
      preloaderEl.classList.add('is-hidden')
    }, 500 );

    window.addEventListener('scroll', function(e) {
      if(this.pageYOffset > 400) {
        backToTopEl.classList.add('is-show');
      } else {
        backToTopEl.classList.remove('is-show');
      }
    })
  }

  navOpen = () => {
    document.querySelector('.app').classList.toggle('nav-is-open')
  }

  backToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
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
        <Favicon url={FaviconImg} />
        <Header data={data} contactData={contactData} onClickFn={this.navOpen}/>
        <main className='main'>
          <Routes />
        </main>
        <Footer data={data} contactData={contactData} />
        <div className='back-to-top' onClick={this.backToTop}>
          <i className='i i-arrow-top'></i>
        </div>
      </div>
    )
  }
}
