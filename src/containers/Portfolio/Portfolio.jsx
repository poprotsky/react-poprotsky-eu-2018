import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Heading from '../../components/Heading/'

export default class Portfolio extends Component {
  render() {
    const activeClass = 'is-active'
    return (
      <div className='main__inner'>
        <Heading subtitle='Portfolio' title='Websites and Apps' />
        <ul>
          <li>
            <NavLink to='/portfolio/digitizer' activeClassName={activeClass}>Project</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
