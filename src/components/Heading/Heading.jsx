import React, { Component } from 'react'

export default class Heading extends Component {
  render() {
    return (
      <div className='heading'>
        <div className='heading__subtitle'>{this.props.subtitle}</div>
        <h1 className='heading__title'>{this.props.title}</h1>
      </div>
    )
  }
}
