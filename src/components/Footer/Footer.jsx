import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Social from '../Social/'

export default class Footer extends Component {
  render() {
    console.log()
    return (
      <footer className='footer'>
        <div className='footer__inner'>
          <NavLink exact to='/'>Poprotsky</NavLink>
          <p>2018 &copy; Copyright by Eugene Poprotsky. All rights reserved. Made in React</p>
          <Social data={this.props.data.social} />
        </div>
      </footer>
    )
  }
}
