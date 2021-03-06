import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Social from '../../components/Social/'

export default class Footer extends Component {
  render() {
    const websiteName = this.props.data.website.name
    const social = this.props.contactData.social

    return (
      <footer className='footer'>
        <div className='footer__inner'>
          <div className='logo'>
            <NavLink exact to='/'>{websiteName}</NavLink>
          </div>
          <p className='footer__copyright'>2019 &copy; Copyright by Eugene Poprotsky. All rights reserved. Made in React</p>
          <Social data={social} />
        </div>
      </footer>
    )
  }
}
