import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import renderHTML from 'react-render-html'

import data from 'Assets/data.json'

import Heading from '../../components/Heading/'
import PortfolioItem from '../../components/PortfolioItem/'

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
      const image_0 = require('Assets/images/projects/' + projectUrl + '/image-0.jpg')
      const image_1 = require('Assets/images/projects/' + projectUrl + '/image-1.jpg')
      const image_2 = require('Assets/images/projects/' + projectUrl + '/image-2.jpg')
      const image_3 = require('Assets/images/projects/' + projectUrl + '/image-3.jpg')
      const image_4 = require('Assets/images/projects/' + projectUrl + '/image-4.jpg')

      if(projectUrl === item.folderName) {
        return (
          <div className='project__inner' key={index}>
            <div className='project__inner-item'>
              <div className='container'>
                {renderHTML(item.project.texts[0])}
              </div>
              <div className='container-fluid'>
                <img src={image_0} alt=""/>
              </div>
            </div>

            <div className='project__inner-item'>
              <div className='container'>
                {renderHTML(item.project.texts[1])}
              </div>
              <div className='container-fluid'>
                <img src={image_1} alt=""/>
              </div>
            </div>

            <div className='project__inner-item'>
              <div className='container'>
                {renderHTML(item.project.texts[2])}
              </div>
              <div className='container-fluid'>
                <img src={image_2} alt=""/>
              </div>
            </div>

            <div className='project__inner-item'>
              <div className='container'>
                {renderHTML(item.project.texts[3])}
              </div>
              <div className='container-fluid'>
                <img src={image_3} alt=""/>
              </div>
            </div>

            <div className='project__inner-item'>
              <div className='container'>
                {renderHTML(item.project.texts[4])}
              </div>
              <div className='container-fluid'>
                <img src={image_4} alt=""/>
              </div>
            </div>
          </div>
        )
      }
    })

    return (
      <div className='main__inner project'>
        {templateTop}
        {templateBottom}
        <div className='container-fluid'>
          <div className='section section--alt'>
            <Heading subtitle='Thanks for watching' title='Check out my other projects' />
            <PortfolioItem data={data.portfolio} number={data.portfolio.length}/>
          </div>
        </div>
      </div>
    )
  }
}
