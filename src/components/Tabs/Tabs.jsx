import React, { Component } from 'react'
import renderHTML from 'react-render-html'

export default class Tabs extends Component {
  render() {
    let tabsItems = this.props.data.map((item, index) => {
      return (
        <div className='tabs__item' key={index}>
          {item.title}
        </div>
      )
    })

    return (
      <div className='tabs'>
        <div className='tabs__item is-active'>All projects</div>
        {tabsItems}
      </div>
    )
  }
}
