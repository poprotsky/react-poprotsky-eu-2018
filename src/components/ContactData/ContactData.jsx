import React, { Component } from 'react'

import data from 'Assets/data.json'

export default class ContactData extends Component {
  render() {
    const contactData = data.contactData
    const email = contactData.email
    const emailLabel = contactData.emailLabel
    const addressFirst = contactData.addressFirst
    const addressSecond = contactData.addressSecond

    return (
      <div className='contact-data'>
        <a href={'mailto:' + email} className='contact-data__email'>{email}</a>
        <span className='contact-data__email-label'>{emailLabel}</span>
        <ul className="contact-data__address">
          <li>{addressFirst}</li>
          <li>{addressSecond}</li>
        </ul>
      </div>
    )
  }
}
