import React, { Component } from 'react'

import Heading from '../../components/Heading/'

export default class About extends Component {
  render() {
    return (
      <div className='main__inner gray-bg'>
        <Heading subtitle='About' title='Hello, I’m Eugene Poprotsky' />
      </div>
    )
  }
}