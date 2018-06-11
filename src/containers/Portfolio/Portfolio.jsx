import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import data from 'Assets/data.json'

import Heading from '../../components/Heading/'
import PortfolioItem from '../../components/PortfolioItem/'

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

          <PortfolioItem data={data.portfolio} />
        </div>
      </div>
    )
  }
}
