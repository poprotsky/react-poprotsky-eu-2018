import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import portfolio from 'Data/portfolio.json'
import projectTypes from 'Data/projectTypes.json'

import Heading from '../../components/Heading/'
import PortfolioItem from '../../components/PortfolioItem/'
import Tabs from '../../components/Tabs/'

export default class Portfolio extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currentType: 0,
    }
  }

  changeCurrentType = (id) => {
    this.setState({
      currentType: id
    })
  }

  render() {
    return (
      <div className='main__inner'>
        <div className='container-fluid'>
          <div className='section section--alt'>
            <Heading subtitle='Portfolio' title='Websites and Apps' classExtra='heading--center' />
            <Tabs data={projectTypes} currentType={this.state.currentType} changeCurrentType={this.changeCurrentType} />
            <PortfolioItem data={portfolio} currentType={this.state.currentType} />
          </div>
        </div>
      </div>
    )
  }
}
