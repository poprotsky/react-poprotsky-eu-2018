import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Nav from '../Project/'

export default class Portfolio extends Component {
  render() {
    const activeClass = 'is-active'
    return (
      <div className="portfolio">
        <h1>Portfolio</h1>
          <ul>
            <li>
              <NavLink to='/portfolio/digitizer' activeClassName={activeClass}>Project</NavLink>
            </li>
          </ul>
      </div>
    )
  }
}
