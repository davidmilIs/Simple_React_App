import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';
import './HelloWorldList.css';

class HelloWorldList extends Component {

  constructor(props) {
  super(props);
  this.state = { greetings: ['Dan', 'Sally', 'Dave','Chou'] };
  this.addGreeting = this.addGreeting.bind(this);
  this.removeGreeting = this.removeGreeting.bind(this);
  }

  //Permet d'ajouter une nouvelle personne
  addGreeting(newName) {
    this.setState({ greetings: [...this.state.greetings, newName] });
    //... signifie que le début de l'array reste le même et on rajoute newName
  }

  //Permet de supprimer une personne
  removeGreeting(removeName) {
    const filteredGreetings = this.state.greetings.filter(name => {
      return name !== removeName;
    });
    //On filtre les noms pour avoir ce qui correspondent au nom que l'on
    //souhaite enlever
    this.setState({ greetings: filteredGreetings });
  }
  renderGreetings() {
  return this.state.greetings.map(name => (
    <HelloWorld
    key={name}
    name={name}
    removeGreeting={this.removeGreeting}
    />
    ));
  //The key here is name, The list of name must be unique
  }

  //On passe l'array a notre child
  //<AddGreeter addGreeting={this.addGreeting}/>
  render() {
    return (
      <div className="HelloWorldList">

        <AddGreeter addGreeting={this.addGreeting}/>
        {this.renderGreetings()}
      </div>
    );
  }
}
export default HelloWorldList;
