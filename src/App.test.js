import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-testing-library';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the required form fields', () => {
  const { getByLabelText } = render(<App />)
  expect(getByLabelText('Title', {exact: false})).toBeInTheDocument()
  expect(getByLabelText('Name', {exact: false})).toBeInTheDocument()
  expect(getByLabelText('Birth', {exact: false})).toBeInTheDocument()
})

it('does not render the optional form fields', () => {
  const { queryByText } = render(<App />)
  expect(queryByText('location', {exact: false})).not.toBeInTheDocument()
  expect(queryByText('time', {exact: false})).not.toBeInTheDocument()
  expect(queryByText('feedback', {exact: false})).not.toBeInTheDocument()
})
