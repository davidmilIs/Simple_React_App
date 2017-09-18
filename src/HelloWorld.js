import React,{ Component } from 'react';
//Component permet de modifier le component initial
import './HelloWorld.css';

//props are essentially just properties inside of a React component that
//are passed in from somewhere (generally the parent)

class HelloWorld extends Component {

  //initial state
  constructor(props) {
  //call out to its parent constructor
  super(props);
  //set a property on the class called “state” via the this.state declaration
  this.state = { greeting: 'Hello' };
  this.frenchify = this.frenchify.bind(this);
  this.removeGreeting = this.removeGreeting.bind(this);
  //Set this reference in frenchify function
  }

  //Change "Hello" in "Bonjour"
  frenchify() {
  //state changes NEED to happen via the this.setState function
  this.setState({ greeting: 'Bonjour' });
  }
  //any class component in React needs to have a render()

  removeGreeting() {
  this.props.removeGreeting(this.props.name);
  }

  render() {
    return (
      <div className="HelloWorld">
      {this.state.greeting} {this.props.name}!
      <br/>
      <button onClick={this.frenchify}>Frenchify!</button>
      <br/>
      <button onClick={this.removeGreeting}>Remove Me!</button>
      </div>
    );
  }

}

//JSX is a templating language that looks VERY similar to HTML.
export default HelloWorld;
