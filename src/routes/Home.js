import React, { useState, useEffect } from "react";
import { Container, Form, InputGroup, Row } from "react-bootstrap";
import { PokemonCard } from "../components/PokemonCard";

function Home({pokemonList}) {
  const [pokemonFiltered, setPokemonFiltered] = useState([pokemonList])
    useEffect(() => {
        setPokemonFiltered(pokemonList)
    }, [pokemonList])

  

  function handleChange(e) {
    const value = e.target.value;
    const regex = new RegExp(value, "gi");
    const filtered = pokemonList.filter((pokemon) => {
      return pokemon.name.match(regex);
    });
    setPokemonFiltered(filtered);
  }

  return (
    <Container fluid className="gap-3 d-grid" style={{padding: "0 10%"}}>
      <InputGroup style={{ padding: "0 30%" }} >
        <Form.Control placeholder="Search" onChange={handleChange} />
      </InputGroup>
      <Row>
        {pokemonFiltered.map((pokemon, key) => (
          <PokemonCard key={key} name={pokemon.name} />
        ))}
      </Row>
    </Container>
  );
}

export { Home };

