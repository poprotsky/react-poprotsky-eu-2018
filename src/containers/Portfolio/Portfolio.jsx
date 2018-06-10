import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Heading from '../../components/Heading/'

export default class Portfolio extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }
  render() {
    const activeClass = 'is-active'
    return (
      <div className='main__inner'>
        <div className='container-fluid'>
          <Heading subtitle='Portfolio' title='Websites and Apps' />
          <ul>
            <li>
              <NavLink to='/portfolio/digitizer' activeClassName={activeClass}>Project</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
