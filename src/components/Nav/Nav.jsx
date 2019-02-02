import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Button from '../Button/'

import contactData from 'Assets/contact.json'

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
           <Button href={'mailto:' + contactData.data.email} classExtra='btn--alt btn--rounded btn--black'>Let's talk</Button>
         </li>
      </ul>
    )
  }
}
