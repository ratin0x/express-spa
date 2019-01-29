import React, { Component } from 'react'
import './PageTwo.scss'
import { 
  CURRENT_LOCATION,
  CURRENT_DATE_TIME,
  USER_FEEDBACK
} from '../constants'

class PageTwo extends Component {
  render() {
    return (
      <div className="form-page-two">
          <div className="form-field">
            <label htmlFor="currentLoc">Loc</label>
            <input 
              type="text" 
              id="currentLoc" 
              name="currentLoc" 
              placeholder="Current Location (e.g. Bristol)" 
              value={this.props.currentLoc || ''} 
              onChange={this.handleLocationChange.bind(this)}>
            </input>
          </div>

          <div className="form-field">
            <label htmlFor="currentDateTime">Date</label>
            <input 
              type="datetime-local"
              id="currentDateTime"
              name="currentDateTime"
              placeholder="currentDateTime"
              value={this.props.currentDateTime || ''} 
              onChange={this.handleDateTimeChange.bind(this)}>
            </input>
          </div>

          <div className="form-field">
            <label htmlFor="userFeedback">Feedback</label>
            <textarea
              // type="textarea"
              rows="3"
              id="userFeedback"
              name="userFeedback"
              placeholder="Feedback"
              value={this.props.userFeedback || ''} 
              onChange={this.handleFeedbackChange.bind(this)}>
            </textarea>
          </div>          
      </div>
    )
  }

  handleLocationChange(e) {
    this.props.handleFieldChange(CURRENT_LOCATION, e.currentTarget.value)
  }

  handleDateTimeChange(e) {
    this.props.handleFieldChange(CURRENT_DATE_TIME, e.currentTarget.value)
  }
  
  handleFeedbackChange(e) {
    this.props.handleFieldChange(USER_FEEDBACK, e.currentTarget.value)
  }  
}

export default PageTwo