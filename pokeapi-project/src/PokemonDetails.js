import React, { useState, useEffect } from "react";
import axios from "axios";

const PokemonDetails = ({ match }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${match.params.name}`)
      .then((response) => {
        setPokemonData(response.data);
      });
  }, [match.params.name]);

  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h1>{pokemonData.name}</h1>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
      <p>Abilities:</p>
      <ul>
        {pokemonData.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
    </>
  );
};

export default PokemonDetails;
