import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Micah", age: "29" },
      { name: "Gojira", age: "9" },
      { name: "Kaiju", age: "3" }
    ]
  };

  switchNameHandler = newName => {
    //console.log("Was clicked!");
    //DON'T DO THIS: this.state.persons[0].name = "Micah Rose";
    this.setState({
      persons: [
        { name: newName, age: "30" },
        { name: "Goji Bear", age: "10" },
        { name: "Kaiju Blue", age: "4" }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Micah", age: "29" },
        { name: event.target.value, age: "9" },
        { name: "Kaiju", age: "3" }
      ]
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={() => this.switchNameHandler("Micah Rose")}
        >
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "MICAH")}
          changed={this.nameChangedHandler}
        >
          My Hobbies: peeing in the kitchen
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
