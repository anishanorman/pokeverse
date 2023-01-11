import React, { useState, useEffect } from "react";
import { CardGroup, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Navigation } from "./components/Navigation";
import { PokemonCard } from "./components/PokemonCard";

const LIMIT = 150;
const pokeApi = `https://pokeapi.co/api/v2/pokemon/?limit=${LIMIT}`

function App() {
  const [pokemonList, setPokemonList] = useState([])
  const [pokemonFiltered, setPokemonFiltered] = useState([])

  useEffect(() => {
    fetch(pokeApi)
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results)
        setPokemonFiltered(data.results)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  function handleChange(e) {
    const value = e.target.value;
    const regex = new RegExp(value, "gi")
    const filtered = pokemonList.filter((pokemon) => {
      return pokemon.name.match(regex)
    });
    setPokemonFiltered(filtered)
  }
  return (
    <div data-testid="app">
      <Navigation />
      <Container fluid className="gap-3 d-grid">
        <InputGroup>
          <Form.Control placeholder="Search" onChange={handleChange}/>
        </InputGroup>
        <Row>
          {pokemonFiltered.map((pokemon, key) => (
              <PokemonCard key={key} name={pokemon.name} url={pokemon.url} />
          ))}
        </Row>
      </Container>
      
    </div>
  );
}

export { App };
