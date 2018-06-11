import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import data from 'Assets/data.json'

import Heading from '../../components/Heading/'
import PortfolioItem from '../../components/PortfolioItem/'
import Tabs from '../../components/Tabs/'

export default class Portfolio extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }
  render() {
    const activeClass = 'is-active'
    return (
      <div className='main__inner'>
        <div className='container-fluid'>
          <div className='section section--alt'>
            <Heading subtitle='Portfolio' title='Websites and Apps' />
            <Tabs data={data.portfolio} />
            <PortfolioItem data={data.portfolio} />
          </div>
        </div>
      </div>
    )
  }
}
