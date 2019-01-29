import React, { Component } from 'react';
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import './App.scss';

class App extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      name: '',
      dob: '',
      currentLoc: '',
      currentDateTime: '',
      userFeedback: ''
    }

    this.submitHandler = this.submitHandler.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
  }  
  submitHandler(e) {
    e.preventDefault()
    const user = JSON.stringify(this.state)
    console.log(`${user}`)
  }

  handleFieldChange(field, value) {
    console.log(`field : ${field}, value: ${value}`)
    switch (field) {
      case 'title':
        this.setState({ title: value})
        break
      case 'name':
        this.setState({ name: value})
        break
      case 'dob':
        this.setState({ dob: value})
        break
      case 'currentLoc':
        this.setState({ currentLoc: value})
        break
      case 'currentDateTime':
        this.setState({ currentDateTime: value})
        break        
      case 'userFeedback':
        this.setState({ userFeedback: value})
        break        
      default:
        break
    }
    // let newFieldValue = { user : {} }
    // newFieldValue.user[field] = value
    // this.setState(newFieldValue)
  }

  pageTwoReady() {
    if (this.state.title.length && this.state.name.length && this.state.dob.length) {
      return true
    } else {
      return false
    }
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
            <button type="submit">Submit</button>        
          </div>
        </form>
      </div>
    );
  }
}

export default App;
