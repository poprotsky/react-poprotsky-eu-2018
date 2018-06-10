import React, { Component } from 'react'

import SkillsItem from './SkillsItem'

export default class SkillsGroup extends Component {
  render() {
    const skillsItems = this.props.data.map((item, index) => {
      return (
        <div className='skills__item-group' key={index}>
          <h3 className='skills__item-group-title'>{item.title}</h3>
          <SkillsItem data={item.items}/>
        </div>
      )
    })

    return (
      <div className='skills__item-inner'>
         {skillsItems}
      </div>
    )
  }
}
