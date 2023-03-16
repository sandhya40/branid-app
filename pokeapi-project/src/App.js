import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={PokemonList} />
      <Route path="/pokemon/:name" component={PokemonDetails} />
    </Router>
  );
};

export default App;
``
