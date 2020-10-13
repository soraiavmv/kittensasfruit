import React, { Component } from "react";
import { CardList } from "./components/card-list/cards-list.jsx";
import { SearchBox } from "./components/searchbox/searchbox.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      fruits: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("api/fruit/all")
      .then((response) => response.json())
      .then((fruit) => this.setState({ fruits: fruit }));
  }

  render() {
    const { fruits, searchField } = this.state;
    const filteredFruit = fruits.filter((fruit) =>
      fruit.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <SearchBox
          placeholder="Search Cat"
          handleChange={(event) =>
            this.setState({ searchField: event.target.value })
          }
        />
        <CardList fruits={filteredFruit}></CardList>
      </div>
    );
  }
}

export default App;
