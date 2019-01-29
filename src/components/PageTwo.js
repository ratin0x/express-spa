import React, { Component } from 'react'
import './PageTwo.scss'

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
              onChange={this.handleLocationChange.bind(this)}
              required>
            </input>
          </div>
          <div className="form-field">
            <label htmlFor="currentDateTime">Date</label>
            <input 
              type="text"
              id="currentDateTime"
              name="currentDateTime"
              placeholder="currentDateTime"
              value={this.props.currentDateTime || ''} 
              onChange={this.handleDateTimeChange.bind(this)}
              required>
            </input>
          </div>
          <div className="form-field">
            <label htmlFor="userFeedback">Feeback</label>
            <input
              type="textarea"
              id="userFeedback"
              name="userFeedback"
              placeholder="Feedback"
              value={this.props.userFeedback || ''} 
              onChange={this.handleFeedbackChange.bind(this)}              
              required>
            </input>
          </div>          
      </div>
    )
  }

  handleLocationChange(e) {
    this.props.handleFieldChange('currentLoc', e.currentTarget.value)
  }

  handleDateTimeChange(e) {
    this.props.handleFieldChange('currentDateTime', e.currentTarget.value)
  }
  
  handleFeedbackChange(e) {
    this.props.handleFieldChange('userFeedback', e.currentTarget.value)
  }  

}

export default PageTwo