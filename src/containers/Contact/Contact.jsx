import React, { Component } from 'react'

import contactData from 'Data/contact.json'

import Heading from '../../components/Heading/'
import ContactData from '../../components/ContactData/'
import Links from '../../components/Links/'

export default class Contact extends Component {
  render() {
    const page = contactData.page
    const subtitle = page.subtitle
    const title = page.title

    return (
      <div className='main__inner gray-bg'>
        <div className='container'>
          <div className='section section--alt'>
            <Heading subtitle={subtitle} title={title} />
            <ContactData data={contactData.data} />
            <Links data={contactData.social} />
          </div>
        </div>
      </div>
    )
  }
}
