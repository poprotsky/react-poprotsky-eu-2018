import React, { Component } from 'react'

export default class ContactData extends Component {
  render() {
    const email = this.props.data.email
    const emailLabel = this.props.data.emailLabel
    const addressFirst = this.props.data.addressFirst
    const addressSecond = this.props.data.addressSecond

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
