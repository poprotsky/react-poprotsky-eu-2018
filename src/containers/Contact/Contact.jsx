import React, { Component } from 'react'
import renderHTML from 'react-render-html'

import data from 'Assets/data.json'

import Heading from '../../components/Heading/'
import ContactData from '../../components/ContactData/'

export default class Contact extends Component {
  render() {
    const page = data.contactPage
    const subtitle = page.subtitle
    const title = page.title

    return (
      <div className='main__inner gray-bg'>
        <div className='container'>
          <div className='section section--alt'>
            <Heading subtitle={subtitle} title={title} />
            <ContactData />
          </div>
        </div>
      </div>
    )
  }
}
