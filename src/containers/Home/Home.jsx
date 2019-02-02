import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import renderHTML from 'react-render-html'

import data from 'Assets/data.json'
import portfolio from 'Assets/portfolio.json'
import projectTypes from 'Assets/projectTypes.json'
import contactData from 'Assets/contact.json'

import PortfolioItemElected from '../../components/PortfolioItemElected/'
import PortfolioItemSelected from '../../components/PortfolioItemSelected/'
import ContactData from '../../components/ContactData/'

import helpers from 'helpers/helpers'

export default class Home extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    const aboutShortData = renderHTML(data.aboutShortData)

    return (
      <div className='main__inner home'>
        <PortfolioItemElected id={2} />

        <div className='container-fluid'>
          <div className='section section--homepage padding-clear--bottom'>
            <PortfolioItemSelected data={portfolio} selected={[7,6,5,3]} />
          </div>
        </div>
        <div className='section dark-bg'>
          <div className='container'>
            <div className='heading-simple'>About</div>
            {aboutShortData}
            <div className='btn-group'>
              <Link to='/about' className='btn-text'>View more</Link>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='container'>
            <div className='heading-simple'>Contact</div>
            <ContactData data={contactData.data} />
          </div>
        </div>
      </div>
    )
  }
}
