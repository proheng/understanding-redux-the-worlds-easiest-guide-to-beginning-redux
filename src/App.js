import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import HelloWorld from "./HelloWorld";
import ButtonGroup from "./ButtonGroup";
import store from "./store";

class App extends Component {
  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />,
      <p>
        This is the sandbox code from{" "}
        <a
          target="_blank"
          href="https://medium.freecodecamp.org/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6"
        >
          <i>Understanding redux the worlds easiest guide to beginning redux</i>
        </a>
      </p>
    ];
  }
}

export default App;
