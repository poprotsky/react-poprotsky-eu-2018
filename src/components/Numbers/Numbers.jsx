import React, { Component } from 'react'
import renderHTML from 'react-render-html'

export default class Numbers extends Component {
  render() {
    const numbersItems = this.props.data.map((item, index) => {
      return (
        <div className='col-3 col-xl-6 col-md-12' key={index}>
          <div className='numbers__item'>
            <span className='numbers__item-title'>{item.number}</span>
            <p className='numbers__item-text'>{renderHTML(item.label)}</p>
          </div>
        </div>
      )
    })
    return (
      <div className='numbers'>
        <div className='row'>
          {numbersItems}
        </div>
      </div>
    )
  }
}
