import React, { Component } from 'react';
import './App.scss';

class App extends Component {  
  submitHandler(e) {
    e.preventDefault()
    console.log('-----')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span>React-Express Form Handler</span>
        </header>
        <form className="user-form" onSubmit={this.submitHandler}>
          <div className="form-field">
            <label htmlFor="title">Title*</label>
            <input type="text" id="title" name="title" placeholder="e.g. Dr, Mrs, Mr, Ms" required></input>
          </div>

          <div className="form-field">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" name="name" placeholder="" required></input>
          </div>

          <div className="form-field">
            <label htmlFor="dob">Date of Birth*</label>
            <input type="text" id="dob" name="dob" placeholder="" required></input>
          </div>

          <div className="form-controls">
            <button type="submit">Submit</button>        
          </div>

          <div className="form-hints">
            <span>
              <small>* denotes a required field</small>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
