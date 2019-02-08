import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import renderHTML from 'react-render-html'

import portfolio from 'Data/portfolio.json'
import projectTypes from 'Data/projectTypes.json'
import aboutData from 'Data/about.json'
import contactData from 'Data/contact.json'

import PortfolioItemElected from '../../components/PortfolioItemElected/'
import PortfolioItemSelected from '../../components/PortfolioItemSelected/'
import ContactData from '../../components/ContactData/'

import helpers from 'helpers/helpers'

export default class Home extends Component {
  render() {

    return (
      <div className='main__inner home'>
        <PortfolioItemElected id={3} />

        <div className='container-fluid'>
          <div className='section section--homepage padding-clear--bottom'>
            <PortfolioItemSelected data={portfolio} selected={[2,6,5,7]} />
          </div>
        </div>
        <div className='section dark-bg'>
          <div className='container'>
            <div className='heading-simple'>{aboutData.page.subtitle}</div>
            <h1>{aboutData.details.title}</h1>
            <p className='lead'>{aboutData.details.lead}</p>
            <div className='btn-group'>
              <Link to='/about' className='btn-text'>View more</Link>
            </div>
          </div>
        </div>
        <div className='section'>
          <div className='container'>
            <div className='heading-simple'>{contactData.page.subtitle}</div>
            <ContactData data={contactData.data} />
          </div>
        </div>
      </div>
    )
  }
}
