import React from "react";
//import React, { useEffect, useRef } from "react";
import classes from "./Cockpit.css";
import Aux from "../../hoc/Aux";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  //Uses 16.8 React - React Hooks
  //const toggleButtonRef = useRef(null);

  //Uses 16.8 React - React Hooks
  //useEffect(
  //  () => {
  //    console.log("[Cockpit.js] useEffect");
  //    //Http request...
  //    setTimeout(() => {
  //      alert("Saved data to cloud!");
  //    }, 1000);
  //    toggleButtonRef.current.click();
  //  },
  //  [props.persons]
  //);

  //useEffect();

  const assignedClasses = [];
  let btnClass = classes.Button;

  if (props.showPersons) {
    btnClass = [classes.Button, classes.Red].join(" ");
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); //classes = [red]
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); //classes = ["red", "bold"]
  }

  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button
        //ref = {toggleButtonRef}
        className={btnClass}
        onClick={props.clicked}
      >
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick={context.login}>Log In</button>}
      </AuthContext.Consumer>
    </Aux>
  );
};

export default cockpit;

/*
Following along on another way to write this component:

import React from 'react';

const cockpit = (props) => {
return ();

};

export default cockpit;
*/
