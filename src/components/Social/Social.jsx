import React, { Component } from 'react'

export default class Social extends Component {
  render() {
    const socialItems = this.props.data.map((item, index) => {
      return (
        <li className='social__item' key={index}>
          <a href={item.url} target="_blank" title={item.name}>
            <i className={'i ' + item.icon}></i>
          </a>
        </li>
      )
    })

    return (
      <ul className='social'>
         {socialItems}
      </ul>
    )
  }
}
