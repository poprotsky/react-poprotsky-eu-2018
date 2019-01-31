import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import renderHTML from 'react-render-html'

import portfolio from 'Assets/portfolio.json'
import projectTypes from 'Assets/projectTypes.json'
import helpers from 'helpers/helpers'

import Heading from '../../components/Heading/'
import PortfolioItemSelected from '../../components/PortfolioItemSelected/'

export default class Project extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }

  componentDidUpdate(prevProps) {
    let projectUrl = this.props.match.params.project
    if (prevProps.projectUrl !== projectUrl) {
      window.scrollTo(0,0)
    }
  }

  render() {
    const projectUrl = this.props.match.params.project

    const templateTop = portfolio.map((item, index) => {
      const thumbnailUrl = require('Assets/images/projects/' + item.folderName + '/thumbnail-large' + (item.formatPng ? '.png' : '.jpg'))

      const projectType = helpers.findById(projectTypes, item.type)

      if(projectUrl === item.folderName) {
        return (
          <div className='project__inner' key={index}>
            <div className='container-fluid'>
              <div className='project__top'>
                <div className='row'>
                  <div className='col-6 col-xl-12'>
                    <Link to='/portfolio' className='btn-text btn-text--small'>Back to portfolio</Link>
                    <div className='project__main'>
                      <h1 className='project__title'>
                        <span>{item.name}</span>
                        <span className='project__title-before' style={{backgroundColor: item.color}}></span>
                      </h1>
                      <div className='project__subtitle'>{item.details.subtitle}</div>
                      <div className='project__description'>{item.details.description}</div>
                    </div>
                  </div>
                  <div className='col-6 col-xl-12'>
                    <div className={'project__thumbnail ' + (item.formatPng ? 'project__thumbnail--without-box-shadow' : '')}>
                      <img src={thumbnailUrl} alt={item.name + ' - ' + item.type}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='project__info'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-7 col-xl-12'>
                    <div className='row'>
                      {item.details.myRole ?
                        <div className='col-6 col-sm-12'>
                          <div className='project__info-item'>
                            <span className='project__info-item-label'>My role</span>
                            <div className='project__info-item-text'>{item.details.myRole}</div>
                          </div>
                        </div>
                        :
                        null
                      }
                      {item.details.madeBy ?
                        <div className='col-6 col-sm-12'>
                          <div className='project__info-item'>
                            <span className='project__info-item-label'>Made by</span>
                            <a href={item.details.madeByLink} className='project__info-item-text' target='_blank'>{item.details.madeBy}</a>
                          </div>
                        </div>
                        :
                        null
                      }
                      {item.type ?
                        <div className='col-6 col-sm-12'>
                          <div className='project__info-item'>
                            <span className='project__info-item-label'>Project type</span>
                            <div className='project__info-item-text'>{projectType ? projectType.title : null}</div>
                          </div>
                        </div>
                        :
                        null
                      }
                      {item.details.timeline ?
                        <div className='col-6 col-sm-12'>
                          <div className='project__info-item'>
                            <span className='project__info-item-label'>Project timeline</span>
                            <div className='project__info-item-text'>{item.details.timeline}</div>
                          </div>
                        </div>
                        :
                        null
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    })

    const templateBottom = portfolio.map((item, index) => {
      const imageUrl = item.details.imageUrl ? require('Assets/images/projects/' + item.details.imageUrl) : null

      if(projectUrl === item.folderName) {
        return (
          <div className='project__inner-item' key={index}>
            <div className='project__inner-item-img'>
              <img src={imageUrl ? imageUrl : null} alt=""/>
            </div>
          </div>
        )
      }
    })

    const selectedItems = portfolio.map((item, index) => {

        const relatedProjects = item.details.relatedProjects

        return relatedProjects

    });


    return (
      <div className='main__inner project'>
        {templateTop}
        {templateBottom}
        <div className='container-fluid'>
          <div className='section section--alt'>
            <Heading subtitle='Thanks for watching' title='Check out my other projects' classExtra='heading--center' />
            <PortfolioItemSelected data={portfolio} selected={[1,2,3]}/>
          </div>
        </div>
      </div>
    )
  }
}
