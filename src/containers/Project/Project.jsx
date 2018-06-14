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
      const thumbnailUrl = require('Assets/images/projects/' + item.folderName + '/thumbnail-large' + (item.formatPng ? '.png' : '.jpg'))

      if(projectUrl === item.folderName) {
        return (
          <div className='project__inner' key={index}>
            <div className='container-fluid'>
              <div className='project__top'>
                <div className='row'>
                  <div className='col-6'>
                    <Link to='/portfolio' className='btn-text btn-text--small'>Back to portfolio</Link>
                    <div className='project__main'>
                      <h1 className='project__title'>
                        <span>{item.name}</span>
                        <span className='project__title-before' style={{backgroundColor: item.color}}></span>
                      </h1>
                      <div className='project__subtitle'>{item.project.subtitle}</div>
                      <div className='project__description'>{item.project.description}</div>
                    </div>
                  </div>
                  <div className='col-6'>
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
                  <div className='col-7'>
                    <div className='row'>
                      <div className='col-6'>
                        <div className='project__info-item'>
                          <span className='project__info-item-label'>My role</span>
                          <div className='project__info-item-text'>{item.project.myRole}</div>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='project__info-item'>
                          <span className='project__info-item-label'>Made by</span>
                          <a href={item.project.madeByLink} className='project__info-item-text' target='_blank'>{item.project.madeBy}</a>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='project__info-item'>
                          <span className='project__info-item-label'>Project type</span>
                          <div className='project__info-item-text'>{item.type}</div>
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='project__info-item'>
                          <span className='project__info-item-label'>Project timeline</span>
                          <div className='project__info-item-text'>{item.project.timeline}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    })

    const templateBottom = data.portfolio.map((item, index) => {
      if(projectUrl === item.folderName) {
        return (
          <div className='project__inner' key={index}>
            bottom part
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
