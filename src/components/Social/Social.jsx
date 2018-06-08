import React, { Component } from 'react'
import renderHTML from 'react-render-html'

export default class Social extends Component {
  render() {
    const socialItems = this.props.data.map((item, index) => {
      return (
        <li key={index}>
          <a href={item.url} target="_blank">{item.name} {renderHTML(item.icon)}</a>
        </li>
      )
    })

    return (
      <ul className='nav'>
         {socialItems}
      </ul>
    )
  }
}
