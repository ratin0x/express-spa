import React, { Component } from 'react';
import logo from './logo.svg';
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
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" placeholder="e.g. Dr, Mrs, Mr, Ms" required></input>
          </div>
        </form>
        <button type="submit">Submit</button>        
      </div>
    );
  }
}

export default App;
