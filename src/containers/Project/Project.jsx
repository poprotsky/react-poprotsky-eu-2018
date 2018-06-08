import React, { Component } from 'react'

export default class Project extends Component {
  render() {
    return (
      <div className="project">
        <h1>Project {this.props.match.params.project}</h1>
      </div>
    )
  }
}
