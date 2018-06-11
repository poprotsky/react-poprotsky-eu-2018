import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PortfolioItem extends Component {
  render() {
    const portfolioItems = this.props.data.map((item, index) => {
      return (
        <div className='col-3' key={index}>
          <Link to={item.href} className={'portfolio-item ' + item.name.toLowerCase()}>
            <div className='portfolio-item__head'>
              <div className='portfolio-item__head-bg' style={{backgroundColor: item.color}}>
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 1920 216.3" style={{enableBackground: "new 0 0 1920 216.3", fill: item.color}} xmlSpace="preserve">
                <path d="M1920,193.6c0,0-291.4,51.1-640,0s-640,0-640,0s-257.5,51.1-640,0V0h1920V193.6z"/>
                </svg>
              </div>
              <div className='portfolio-item__img'>
                <img src={require('Assets/images/projects/' + item.name.toLowerCase() + '/thumbnail.jpg')} alt={item.name + ' - ' + item.type}/>
              </div>
            </div>
            <div className='portfolio-item__footer'>
              <span className='portfolio-item__subtitle'>{item.type}</span>
              <h2 className='portfolio-item__title'>{item.name}</h2>
            </div>
          </Link>
        </div>
      )
    })

    return (
      <div className='portfolio-items'>
        <div className='row'>
          {portfolioItems}
        </div>
      </div>
    )
  }
}
