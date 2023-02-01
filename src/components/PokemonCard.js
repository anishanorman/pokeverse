import React, { useState, useEffect } from "react";
import { Badge, Col, ListGroup, ListGroupItem, Stack } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function PokemonCard({ url, name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return (
    <Col xs={10} sm={6} md={4} lg={3} xl={3} xxl={2} className="mx-auto">
      <Card className="text-center">
        <Stack
          style={{
            padding: "15px",
            right: "0",
            display: "flex",
            justifyContent: "space-between",
          }}
          direction="horizontal"
        >
          <div style={{ display: "flex", gap: "15px" }}>
            {pokemon?.types.map((type, key) => {
              return (
                <Badge className={type.type.name} key={key}>
                  {type.type.name}
                </Badge>
              );
            })}
          </div>

          <Badge bg="light" text="dark" style={{ fontWeight: "light" }}>
            Id: {pokemon?.id}
          </Badge>
        </Stack>
        <Link to={`/${name}`}>
          <Card.Img
            style={{
              height: 150,
              width: 150,
              margin: "auto",
            }}
            src={pokemon?.sprites.front_default}
          />
        </Link>

        <Card.Body>
          <Card.Title>
            <Link
              to={`/${name}`}
              style={{ textDecoration: "none", color: "initial" }}
            >
              {name}
            </Link>
          </Card.Title>
          <ListGroup variant="flush">
            {pokemon?.abilities.map((item) => (
              <ListGroupItem key={item.ability.name}>
                {item.ability.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </Col>
  );
}

export { PokemonCard };
