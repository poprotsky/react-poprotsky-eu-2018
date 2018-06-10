import React, { Component } from 'react'
import renderHTML from 'react-render-html'

import data from 'Assets/data.json'

import Heading from '../../components/Heading/'
import Button from '../../components/Button/'
import Numbers from '../../components/Numbers/'

export default class About extends Component {
  render() {
    const page = data.aboutPage
    const subtitle = page.subtitle
    const title = page.title
    const textContent = renderHTML(page.textContent)

    return (
      <div className='main__inner gray-bg'>
        <div className='container'>
          <div className='section section--alt'>
            <Heading subtitle={subtitle} title={title} />
            {textContent}
            <Button href='http://poprotsky.eu/cv_2018_eugene_poprotsky.pdf' target='_blank'>Download CV <span>(june 2018)</span></Button>
          </div>
        </div>
        <div className='skills-group'>
          {/* skills component x2 */}
        </div>
        <div className='container-fluid'>
          <div className='section'>
            <Numbers data={data.numbers} />
          </div>
        </div>
      </div>
    )
  }
}
