import React, { Component } from 'react'

export default class Heading extends Component {
  render() {
    return (
      <div className={'heading' + (this.props.withoutBefore ? ' heading--without-before' : '')}>
        {this.props.subtitle ? <div className='heading__subtitle'> {this.props.subtitle} </div> : null}
        {this.props.title ? <h1 className='heading__title'> {this.props.title} </h1> : null}
      </div>
    )
  }
}
