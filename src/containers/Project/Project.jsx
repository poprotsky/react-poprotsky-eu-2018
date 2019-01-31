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

    const currentProject = portfolio.find((item, index) => (projectUrl === item.folderName));

    const thumbnailUrl = require('Assets/images/projects/' + currentProject.folderName + '/thumbnail-large' + (currentProject.formatPng ? '.png' : '.jpg'))

    const projectType = helpers.findById(projectTypes, currentProject.type)

    const imageUrl = currentProject.details.imageUrl ? require('Assets/images/projects/' + currentProject.details.imageUrl) : null


    return (
      <div className='main__inner project'>
        <div className='project__inner'>
          <div className='container-fluid'>
            <div className='project__top'>
              <div className='row'>
                <div className='col-6 col-xl-12'>
                  <Link to='/portfolio' className='btn-text btn-text--small'>Back to portfolio</Link>
                  <div className='project__main'>
                    <h1 className='project__title'>
                      <span>{currentProject.name}</span>
                      <span className='project__title-before' style={{backgroundColor: currentProject.color}}></span>
                    </h1>
                    <div className='project__subtitle'>{currentProject.details.subtitle}</div>
                    <div className='project__description'>{currentProject.details.description}</div>
                  </div>
                </div>
                <div className='col-6 col-xl-12'>
                  <div className={'project__thumbnail ' + (currentProject.formatPng ? 'project__thumbnail--without-box-shadow' : '')}>
                    <img src={thumbnailUrl} alt={currentProject.name + ' - ' + currentProject.type}/>
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
                    {currentProject.details.myRole ?
                      <div className='col-6 col-sm-12'>
                        <div className='project__info-item'>
                          <span className='project__info-item-label'>My role</span>
                          <div className='project__info-item-text'>{currentProject.details.myRole}</div>
                        </div>
                      </div>
                      :
                      null
                    }
                    {currentProject.details.madeBy ?
                      <div className='col-6 col-sm-12'>
                        <div className='project__info-item'>
                          <span className='project__info-item-label'>Made in collaboration with</span>
                          <a href={currentProject.details.madeByLink} className='project__info-item-text' target='_blank'>{currentProject.details.madeBy}</a>
                        </div>
                      </div>
                      :
                      null
                    }
                    {currentProject.type ?
                      <div className='col-6 col-sm-12'>
                        <div className='project__info-item'>
                          <span className='project__info-item-label'>Project type</span>
                          <div className='project__info-item-text'>{projectType ? projectType.title : null}</div>
                        </div>
                      </div>
                      :
                      null
                    }
                    {currentProject.details.timeline ?
                      <div className='col-6 col-sm-12'>
                        <div className='project__info-item'>
                          <span className='project__info-item-label'>Project timeline</span>
                          <div className='project__info-item-text'>{currentProject.details.timeline}</div>
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
          
          <div className='project__inner-item'>
            <div className='project__inner-item-img'>
              <img src={imageUrl ? imageUrl : null} alt=""/>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div className='section section--alt'>
            <Heading subtitle='Thanks for watching' title='Check out related projects' classExtra='heading--center' />
            <PortfolioItemSelected data={portfolio} selected={currentProject.details.relatedProjects}/>
          </div>
        </div>
      </div>
    )
  }
}
