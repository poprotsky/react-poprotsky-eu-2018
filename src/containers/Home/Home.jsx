import React, { Component } from 'react'
import renderHTML from 'react-render-html'

import data from 'Assets/data.json'

import ContactData from '../../components/ContactData/'

export default class Home extends Component {
  render() {
    const aboutShortData = renderHTML(data.aboutShortData)
    return (
      <div className='main__inner home'>
        <div className='container-fluid'>

        </div>
        <div className='section dark-bg'>
          <div className='container'>
            <div className="heading-simple">About</div>
            {aboutShortData}
          </div>
        </div>
        <div className='section'>
          <div className='container'>
            <div className="heading-simple">Contact</div>
            <ContactData data={data.contactData} />
          </div>
        </div>
      </div>
    )
  }
}
