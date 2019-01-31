import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import portfolio from 'Assets/portfolio.json'
import projectTypes from 'Assets/projectTypes.json'

import Heading from '../../components/Heading/'
import PortfolioItem from '../../components/PortfolioItem/'
import Tabs from '../../components/Tabs/'

export default class Portfolio extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }
  /*
    .filter((item) => item.type === 1)
  */
  render() {
    return (
      <div className='main__inner'>
        <div className='container-fluid'>
          <div className='section section--alt'>
            <Heading subtitle='Portfolio' title='Websites and Apps' classExtra='heading--center' />
            <Tabs data={projectTypes} />
            <PortfolioItem data={portfolio}/>
          </div>
        </div>
      </div>
    )
  }
}
