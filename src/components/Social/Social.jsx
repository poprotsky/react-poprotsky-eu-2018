import React, { Component } from 'react'
import renderHTML from 'react-render-html'

export default class Social extends Component {
  render() {
    const socialItems = this.props.data.map((item, index) => {
      return (
        <li className='social__item' key={index}>
          <a href={item.url} target="_blank" title={item.name}>{renderHTML(item.icon)}</a>
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
