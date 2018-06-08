import React, { Component } from 'react'

import { Link, NavLink } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    const activeClass = 'is-active'

    const navItems = this.props.data.map((item, index) => {
      return (
        <li className='nav__item' key={index}>
          <NavLink to={item.link} activeClassName={activeClass}><span>{item.name}</span></NavLink>
        </li>
      )
    })

    return (
      <ul className='nav'>
         {navItems}
         <li className='nav__item'>
           <a href='mailto:eugene@poprotsky.eu' className='btn'>Let's talk</a>
         </li>
      </ul>
    )
  }
}
