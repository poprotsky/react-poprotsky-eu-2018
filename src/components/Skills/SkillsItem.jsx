import React, { Component } from 'react'

export default class SkillsItem extends Component {
  render() {
    const skillsItems = this.props.data.map((item, index) => {
      let styles = {width: item.percent + '%'}
      return (
        <div className='skills__item-group-item' key={index}>
          <span className='skills__item-group-item-title'>{item.name}</span>
          <div className='progress-bar'>
            <span className='progress-bar__bg'>
              <span className='progress-bar__progress' style={styles}></span>
            </span>
            <span className='progress-bar__label'>{item.percent}%</span>
          </div>
        </div>
      )
    })

    return (
      <div className='skills__item-group-inner'>
         {skillsItems}
      </div>
    )
  }
}
