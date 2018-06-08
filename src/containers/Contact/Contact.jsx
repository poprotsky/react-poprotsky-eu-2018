import React, { Component } from 'react'
import renderHTML from 'react-render-html'

import data from 'Assets/data.json'

import Heading from '../../components/Heading/'

export default class Contact extends Component {
  render() {
    console.log(data);
    const page = data.contactPage
    const subtitle = page.subtitle
    const title = page.title
    const email = renderHTML(page.email)
    const addressFirst = page.addressFirst
    const addressSecond = page.addressSecond

    return (
      <div className='main__inner gray-bg'>
        <Heading subtitle={subtitle} title={title} />
        {email}
        <ul>
          <li>{addressFirst}</li>
          <li>{addressSecond}</li>
        </ul>
      </div>
    )
  }
}
