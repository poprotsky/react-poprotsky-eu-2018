import React, { Component } from 'react'
import renderHTML from 'react-render-html'

import aboutData from 'Data/about.json'
import contactData from 'Data/contact.json'
import skillsData from 'Data/skills.json'
import numbersData from 'Data/numbers.json'

import Heading from '../../components/Heading/'
import Button from '../../components/Button/'
import Skills from '../../components/Skills/'
import Numbers from '../../components/Numbers/'

export default class About extends Component {
  render() {
    const page = aboutData.page
    const subtitle = page.subtitle
    const title = page.title

    const descriptionLead = aboutData.details.lead
    const description = renderHTML(aboutData.details.description)

    return (
      <div className='main__inner gray-bg'>
        <div className='container'>
          <div className='section section--alt'>
            <Heading subtitle={subtitle} title={title} />
            <p className='lead'>{descriptionLead}</p>
            {description}
            <div className='btn-group'>
              <Button href={'mailto:' + contactData.data.email} classExtra=' btn--black'>Let's talk</Button>
              <Button href='http://poprotsky.eu/cv_2018_eugene_poprotsky.pdf' target='_blank'>Download CV <span>(december 2018)</span></Button>
            </div>
          </div>
        </div>
        <Skills data={skillsData} />
        <div className='container-fluid'>
          <div className='section'>
            <Numbers data={numbersData} />
          </div>
        </div>
      </div>
    )
  }
}
