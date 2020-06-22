import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import { robots } from "./Robots";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        response.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          robots: robots,
        });
      });
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    console.log(this.state.robots.length);
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      const filteredRobots = this.state.robots.filter((robots) => {
        return robots.name
          .toLocaleLowerCase()
          .includes(this.state.searchfield.toLocaleLowerCase());
      });
      return (
        <div className="tc">
          <h1 className="f1">Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange}></SearchBox>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}></CardList>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
