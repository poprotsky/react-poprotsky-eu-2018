import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import projectTypes from 'Data/projectTypes.json'
import helpers from 'helpers/helpers'

export default class PortfolioItem extends Component {

  render() {
    const portfolio = this.props.data.filter((item) => {
      if (this.props.currentType !== 0) {
        return item.type === this.props.currentType;
      }
      return true;
    });

    let portfolioItems = portfolio.reverse().map((item, index) => {
      const thumbnailUrl = require('Assets/images/projects/' + item.folderName + '/thumbnail' + (item.formatPng ? '.png' : '.jpg'))

      const projectType = helpers.findById(projectTypes, item.type)

      return (
        <div className='col-4 col-xl-6 col-md-12' key={index}>
          <Link to={item.href} className={'portfolio-item ' + item.folderName}>
            <div className={'portfolio-item__head ' + (item.extraClass ? item.extraClass : '')}>
              <div className='portfolio-item__head-bg' style={{backgroundColor: item.color}}>
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 1920 216.3" style={{enableBackground: "new 0 0 1920 216.3", fill: item.color}} xmlSpace="preserve">
                <path d="M1920,193.6c0,0-291.4,51.1-640,0s-640,0-640,0s-257.5,51.1-640,0V0h1920V193.6z"/>
                </svg>
              </div>
              <div className={'portfolio-item__img ' + (item.formatPng ? 'box-shadow-clear' : '')}>
                <img src={thumbnailUrl} alt={item.name + ' - ' + item.type}/>
              </div>
            </div>
            <div className='portfolio-item__footer'>
              <span className='portfolio-item__subtitle'>{projectType ? projectType.title : null}</span>
              <h2 className='portfolio-item__title'>{item.name}</h2>
            </div>
          </Link>
        </div>
      )
    })

    return (
      <div className='portfolio-items'>
        <div className='row large-gutters justify-content-center'>
          {portfolioItems}
        </div>
      </div>
    )
  }
}
