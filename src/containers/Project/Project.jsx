import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import data from 'Assets/data.json'

export default class Project extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }

  render() {
    const projectUrl = this.props.match.params.project

    const templateTop = data.portfolio.map((item, index) => {
      if(projectUrl === item.folderName) {
        return (
          <div className='project__inner' key={index}>
            <Link to='/portfolio' className='btn-text btn-text--small'>Back to portfolio</Link>
            <div>{item.name}</div>
            <div>{item.project.subtitle}</div>
            <div>{item.project.description}</div>
            <div>{item.project.myRole}</div>
            <div>{item.project.madeBy}</div>
            <div>{item.project.timeline}</div>
            <img src={require('Assets/images/projects/' + item.folderName + '/thumbnail-large' + (item.formatPng ? '.png' : '.jpg'))} alt={item.name + ' - ' + item.type}/>
          </div>
        )
      }
    })

    const templateBottom = data.portfolio.map((item, index) => {
      if(projectUrl === item.folderName) {
        return (
          <div className='project__inner' key={index}>
            {item.type}
          </div>
        )
      }
    })
    return (
      <div className='main__inner project'>
        {templateTop}
        {templateBottom}
      </div>
    )
  }
}
