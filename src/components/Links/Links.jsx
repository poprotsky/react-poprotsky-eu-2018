import React, { Component } from 'react'

export default class Links extends Component {
  render() {
    const linksItems = this.props.data.map((item, index) => {
      return (
        <li className='links__item' key={index}>
          <a href={item.url} target="_blank" title={item.name}>
            <i className={'links__item-icon i ' + item.icon}></i>
            <span className='links__item-title'>{item.title}</span>
          </a>
        </li>
      )
    })

    return (
      <ul className='links'>
         {linksItems}
      </ul>
    )
  }
}
