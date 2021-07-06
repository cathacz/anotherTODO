import React from "react";
// import React, { Component } from "react";
import "./sass/main.scss";
import List from "./components/list/List";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>Another To-Do-List</h1>
        </header>
        <main>
          <h2>My To-Dos:</h2>
          <List />
        </main>
        <footer></footer>
      </React.Fragment>
    );
  }
}
