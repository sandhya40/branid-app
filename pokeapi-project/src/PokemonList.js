import React, { useState, useEffect } from "react";
import axios from "axios";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextUrl, setNextUrl] = useState("");

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((response) => {
      setPokemonList(response.data.results);
      setNextUrl(response.data.next);
    });
  }, []);

  const loadMore = () => {
    axios.get(nextUrl).then((response) => {
      setPokemonList([...pokemonList, ...response.data.results]);
      setNextUrl(response.data.next);
    });
  };

  return (
    <>
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => (
          <Link key={pokemon.name} to={`/pokemon/${pokemon.name}`}>
            <LazyLoadComponent>
              <div className="pokemon-card">
                <p>{pokemon.name}</p>
              </div>
            </LazyLoadComponent>
          </Link>
        ))}
      </div>
      <div className="load-more">
        {nextUrl && <button onClick={loadMore}>Load More</button>}
      </div>
    </>
  );
};

export default PokemonList;
