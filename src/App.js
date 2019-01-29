import React, { Component } from 'react';
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import './App.scss';
import { 
  TITLE,
  NAME,
  DOB,
  CURRENT_LOCATION,
  CURRENT_DATE_TIME,
  USER_FEEDBACK
} from './constants'

class App extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      name: '',
      dob: '',
      currentLoc: '',
      currentDateTime: '',
      userFeedback: '',
      submitted: false,
      sumbittedMessage: ''
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>React-Express Form Handler</span>
        </header>
        <form className="user-form" onSubmit={this.submitHandler}>
          <PageOne 
            title={this.state.title} 
            name={this.state.name} 
            dob={this.state.dob} 
            handleFieldChange={this.handleFieldChange}
          ></PageOne>
          { 
            this.pageTwoReady() ? 
              <PageTwo 
                currentLoc={this.state.currentLoc}
                currentDateTime={this.state.currentDateTime}
                userFeedback={this.state.userFeedback}
                handleFieldChange={this.handleFieldChange}>
              </PageTwo> : <div></div>
          }          
          <div className="form-hints">
            <span>
              <small>* denotes a required field</small>
            </span>
          </div>
          <div className="form-controls">
            {
              this.pageTwoReady() ?
                <button type="submit">Submit</button> :
                <div></div>
            }            
          </div>
        </form>
        <div className="submitMessage">
          {
            (this.state.submitted) ? 
              <div>Thank you for your submission!</div> :
              <div></div>              
          }
        </div>
      </div>
    );
  }

  submitHandler(e) {
    e.preventDefault()
    const submitUrl = process.env.REACT_APP_SUBMIT_URL
    const postData = {
      title: this.state.title,
      name: this.state.name,
      dob: this.state.dob,
      currentLoc: this.state.currentLoc,
      currentDateTime: this.state.currentDateTime,
      userFeedback: this.state.userFeedback
    }
    fetch(
      submitUrl, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json'
        }
    })
    .then(response => {
      return response.json()
    }).then(json => {
      this.setState({submitted: true})
    }).catch( error => {
      console.error(error)
    })
  }

  handleFieldChange(field, value) {
    if (this.state.submitted) {
      this.setState({submitted: false})      
    }

    switch (field) {
      case TITLE:
        this.setState({ title: value})
        break
      case NAME:
        this.setState({ name: value})
        break
      case DOB:
        this.setState({ dob: value})
        break
      case CURRENT_LOCATION:
        this.setState({ currentLoc: value})
        break
      case CURRENT_DATE_TIME:
        this.setState({ currentDateTime: value})
        break        
      case USER_FEEDBACK:
        this.setState({ userFeedback: value})
        break        
      default:
        break
    }
  }

  pageTwoReady() {
    if (this.state.title.length && this.state.name.length && this.state.dob.length) {
      return true
    } else {
      return false
    }
  }
}

export default App;
