import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <a href={this.props.href} target={this.props.target ? this.props.target : null} className={'btn ' + (this.props.classExtra ? this.props.classExtra : '')}>{this.props.children}</a>
    )
  }
}
