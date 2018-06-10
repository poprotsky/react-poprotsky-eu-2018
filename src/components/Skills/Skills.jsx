import React, { Component } from 'react'

import SkillsGroup from './SkillsGroup'

export default class Skills extends Component {
  render() {
    const skillsItems = this.props.data.map((item, index) => {
      return (
        <div className={'skills__item' + (item.id === 0 ? ' skills__item--dark' : '')} key={index}>
          <h2 className='skills__item-title'><span>{item.title}</span></h2>
          <SkillsGroup data={item.groups}/>
        </div>
      )
    })

    return (
      <div className='skills'>
         {skillsItems}
      </div>
    )
  }
}
