import { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { PokemonDetailedCard } from "../components/PokemonDetailedCard";

function PokemonDetails() {
  const [pokemon, setPokemon] = useState(null);
  const params = useParams();
  const url = `https://pokeapi.co/api/v2/pokemon/${params.name}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!pokemon) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <PokemonDetailedCard pokemon={pokemon} />
  );
}

export { PokemonDetails };
