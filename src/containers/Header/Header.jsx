import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Nav from '../../components/Nav/'
import Social from '../../components/Social/'

export default class Header extends Component {
  render() {
    const websiteName = this.props.data.website.name
    const nav = this.props.data.nav
    const social = this.props.data.social

    return (
      <header className='header'>
        <div className='header__inner'>
          <NavLink exact to='/'>{websiteName}</NavLink>
          <Nav data={nav}/>
          <Social data={social} />
        </div>
      </header>
    )
  }
}
