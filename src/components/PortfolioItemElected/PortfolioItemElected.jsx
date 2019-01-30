import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import data from 'Assets/data.json'
import projectTypes from 'Assets/projectTypes.json'
import helpers from 'helpers/helpers'

export default class PortfolioItemElected extends Component {

  render() {
    const electedId = this.props.id
    const electedProject = helpers.findById(data.portfolio, electedId)

    const electedImg = require('Assets/images/projects/' + electedProject.folderName + '/thumbnail-large' + (electedProject.formatPng ? '.png' : '.jpg'))

    const electedProjectType = helpers.findById(projectTypes, electedProject.type)

    return (
      <div className='portfolio-item--elected'>
        {electedProject.name}
        {electedProjectType.title}
        <Link to={electedProject.href} className='btn btn--alt btn--rounded btn--black'>View project</Link>
        <img src={electedImg} />
      </div>
    )
  }
}
