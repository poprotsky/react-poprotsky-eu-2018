import React, { Component } from 'react'
import renderHTML from 'react-render-html'

export default class Tabs extends Component {

  render() {
    let tabsItems = this.props.data.map((item, index) => {
      return (
        <div className={'tabs__item' + ((item.id === this.props.currentType) ? ' is-active': '')} key={index} onClick={() => this.props.changeCurrentType(item.id)}>
          {item.title}
        </div>
      )
    })

    return (
      <div className='tabs'>
        <div className={'tabs__item' + ((0 === this.props.currentType) ? ' is-active': '')} onClick={() => this.props.changeCurrentType(0)}>All projects</div>
        {tabsItems}
      </div>
    )
  }
}
