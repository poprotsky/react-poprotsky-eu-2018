import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Heading from '../../components/Heading/'

export default class NotFound extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }
  render() {
    return (
      <div className='main__inner not-found gray-bg'>
        <div className='container'>
          <div className='section section--alt'>
            <Heading subtitle='404' title='Page not found' />
            <Link to='/' className='btn'>Back to homepage</Link>
          </div>
        </div>
      </div>
    )
  }
}
