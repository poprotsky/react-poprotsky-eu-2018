import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import renderHTML from 'react-render-html'

import data from 'Assets/data.json'

import PortfolioItem from '../../components/PortfolioItem/'
import ContactData from '../../components/ContactData/'

export default class Home extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }
  render() {
    const aboutShortData = renderHTML(data.aboutShortData)

    return (
      <div className='main__inner home'>
        <div className='container-fluid'>
          <div className='section section--homepage'>
            <PortfolioItem data={data.portfolio} number="3" />
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
            <ContactData data={data.contactData} />
          </div>
        </div>
      </div>
    )
  }
}
