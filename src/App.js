import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { FavouritesProvider } from "./helpers/FavouritesProvider";
import { Favourites } from "./routes/Favourites";
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
        setPokemonList(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div data-testid="app">
      <BrowserRouter>
        <Navigation />
        <FavouritesProvider>
          <Routes>
            <Route path="/" element={<Home pokemonList={pokemonList} />} />
            <Route path="/:name" element={<PokemonDetails />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </FavouritesProvider>
      </BrowserRouter>
    </div>
  );
}

export { App };
