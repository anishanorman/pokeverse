import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./routes/Home";
import { PokemonDetails } from "./routes/PokemonDetails";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`;

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch(pokeApi)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div data-testid="app">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home pokemonList={pokemonList} />} />
          <Route path="/:name" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export { App };
