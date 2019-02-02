import React, { Component } from 'react'
import renderHTML from 'react-render-html'

import data from 'Assets/data.json'
import contactData from 'Assets/contact.json'

import Heading from '../../components/Heading/'
import Button from '../../components/Button/'
import Skills from '../../components/Skills/'
import Numbers from '../../components/Numbers/'

export default class About extends Component {
  componentWillMount() {
    window.scrollTo(0,0)
  }
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
            <div className='btn-group'>
              <Button href={'mailto:' + contactData.data.email} classExtra=' btn--black'>Let's talk</Button>
              <Button href='http://poprotsky.eu/cv_2018_eugene_poprotsky.pdf' target='_blank'>Download CV <span>(december 2018)</span></Button>
            </div>
          </div>
        </div>
        <Skills data={data.skills} />
        <div className='container-fluid'>
          <div className='section'>
            <Numbers data={data.numbers} />
          </div>
        </div>
      </div>
    )
  }
}
