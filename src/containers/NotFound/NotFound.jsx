import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Heading from '../../components/Heading/'

export default class NotFound extends Component {
  render() {
    return (
      <div className='main__inner not-found gray-bg'>
        <div className='container'>
          <div className='section section--alt'>
            <Heading subtitle='404' title='Page not found' classExtra='heading--center'/>
            <div className='btn-group btn-group--center'>
              <Link to='/portfolio' className='btn btn--black'>Explore portfolio</Link>
              <Link to='/' className='btn'>Back to homepage</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
