import React, { Component } from 'react'
import './PageOne.scss'
import { 
  TITLE,
  NAME,
  DOB
} from '../constants'

/**
 * Form page containing required elements
 */
class PageOne extends Component {
  render() {
    return (
      <div className="form-page-one">
          <div className="form-field">
            <div className="label">
              <label htmlFor="title">Title<sup><small>*</small></sup></label>
            </div>
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
            <div className="label">
              <label htmlFor="name">Name<sup><small>*</small></sup></label>
            </div>
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
            <div className="label">
              <label htmlFor="dob">Date of Birth<sup><small>*</small></sup></label>
            </div>
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