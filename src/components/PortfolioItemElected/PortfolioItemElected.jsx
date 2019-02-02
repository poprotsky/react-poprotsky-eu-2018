import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import portfolio from 'Data/portfolio.json'
import projectTypes from 'Data/projectTypes.json'
import helpers from 'helpers/helpers'

export default class PortfolioItemElected extends Component {

  render() {
    const electedId = this.props.id

    const electedProject = helpers.findById(portfolio, electedId)

    const electedImg = require('Assets/images/projects/' + electedProject.folderName + '/thumbnail-large' + (electedProject.formatPng ? '.png' : '.jpg'))

    const electedProjectType = helpers.findById(projectTypes, electedProject.type)

    return (
      <div className='portfolio-item-elected'>
        <div className='container-fluid'>
          <div className='portfolio-item-elected__inner'>
            <div className='portfolio-item-elected__content'>
              <div className='portfolio-item-elected__head'>
                <div className='portfolio-item-elected__subtitle'>
                  {electedProjectType.title}
                </div>
                <div className='portfolio-item-elected__title'>
                  {electedProject.name}
                </div>
                <div className='portfolio-item-elected__description'>
                  {electedProject.details.description}
                </div>
              </div>
              <Link to={electedProject.href} className='btn btn--alt btn--rounded btn--border'>View project</Link>
            </div>
            <Link to={electedProject.href} className={'portfolio-item-elected__img' + (electedProject.formatPng ? ' portfolio-item-elected__img--without-box-shadow' : '')}>
              <img src={electedImg} />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
