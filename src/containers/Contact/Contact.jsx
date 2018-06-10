import React, { Component } from 'react'

import data from 'Assets/data.json'

import Heading from '../../components/Heading/'
import ContactData from '../../components/ContactData/'
import Links from '../../components/Links/'

export default class Contact extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }
  render() {
    const page = data.contactPage
    const subtitle = page.subtitle
    const title = page.title

    return (
      <div className='main__inner gray-bg'>
        <div className='container'>
          <div className='section section--alt'>
            <Heading subtitle={subtitle} title={title} />
            <ContactData data={data.contactData} />
            <Links data={data.social} />
          </div>
        </div>
      </div>
    )
  }
}
