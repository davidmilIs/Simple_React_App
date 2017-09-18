import React, { Component } from 'react';
import './AddGreeter.css';

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingName: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    //Bind le this de handleUpdate, car cette fonction
    //a pour but de modifier le state.
    this.addGreeting = this.addGreeting.bind(this);
  }
  handleUpdate(event) {
    this.setState({ greetingName: event.target.value });
  }

  addGreeting() {
  //calls the “addGreeting” function that was passed in via props
  this.props.addGreeting(this.state.greetingName);
  this.setState({ greetingName: '' });
  }

  render() {
    return (
      <div className="AddGreeter">
        <input
        type="text"
        onChange={this.handleUpdate}
        value={this.state.greetingName}
        />
        &nbsp;&nbsp;
        <button onClick={this.addGreeting}>Add</button>
      </div>
    );
  }
}
export default AddGreeter;
