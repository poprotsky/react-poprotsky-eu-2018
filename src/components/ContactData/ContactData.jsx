import React, { Component } from 'react'

export default class ContactData extends Component {
  render() {
    const email = this.props.data.email
    const emailLabel = this.props.data.emailLabel
    const phone = this.props.data.phone
    const phoneHref = this.props.data.phoneHref
    const addressFirst = this.props.data.addressFirst
    const addressSecond = this.props.data.addressSecond

    return (
      <div className='contact-data'>
        <ul>
          <li>
            <a href={'tel:' + phoneHref} className='contact-data__email'>{phone}</a>
          </li>
          <li>
            <a href={'mailto:' + email} className='contact-data__email'>{email}</a>
            <span className='contact-data__email-label'>{emailLabel}</span>
          </li>
        </ul>
        <ul className="contact-data__address">
          <li>{addressFirst}</li>
          <li>{addressSecond}</li>
        </ul>
      </div>
    )
  }
}
