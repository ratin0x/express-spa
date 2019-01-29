import React, { Component } from 'react'
import './PageOne.scss'
import { 
  TITLE,
  NAME,
  DOB
} from '../constants'

class PageOne extends Component {
  render() {
    return (
      <div className="form-page-one">
          <div className="form-field">
            <label htmlFor="title">Title*</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="e.g. Dr, Mrs, Mr, Ms"
              value={this.props.title || ''}
              onChange={this.handleTitleChange.bind(this)}
              required>
            </input>
          </div>

          <div className="form-field">
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=""
              value={this.props.name || ''}
              onChange={this.handleNameChange.bind(this)}
              required>
            </input>
          </div>

          <div className="form-field">
            <label htmlFor="dob">Date of Birth*</label>
            <input
              type="date"
              id="dob"
              name="dob"
              placeholder=""
              value={this.props.dob || ''}
              onChange={this.handleDobChange.bind(this)}
              required
            ></input>
          </div>
      </div>
    )
  }
  
  handleTitleChange(e) {
    this.props.handleFieldChange(TITLE, e.currentTarget.value)
  }

  handleNameChange(e) {
    this.props.handleFieldChange(NAME, e.currentTarget.value)
  }
  
  handleDobChange(e) {
    this.props.handleFieldChange(DOB, e.currentTarget.value)
  }  
}

export default PageOne