import React, { Component } from 'react'

export default class Project extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div className='main__inner project'>
        <h1>Project {this.props.match.params.project}</h1>
      </div>
    )
  }
}
