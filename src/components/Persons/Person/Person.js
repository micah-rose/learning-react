import React, { Component } from "react";
import classes from "./Person.css";
import WithClass from "../../../hoc/WithClass";
import PropTypes from "prop-types";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }

  //Another way to designate a focus with React - more modern approach
  //constructor(props){
  //super(props);
  //  this.inputElementRef = React.createRef();
  //}

  static contextType = AuthContext;

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
    //this.inputElement.focus();
    //this.inputElementRef.current.focus();
    //console.log(this.context.authenticated);
  }

  focus() {
    if (this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  render() {
    console.log("[Person.js] Inside Render");
    return (
      <WithClass classes={classes.Person}>
        {this.context.authenticated ? (
          <p>Authenticated</p>
        ) : (
          <p>Please Log In</p>
        )}

        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          key="i3"
          ref={inputEl => {
            this.inputElement = inputEl;
          }}
          //ref = this.inputElementRef
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default Person;
