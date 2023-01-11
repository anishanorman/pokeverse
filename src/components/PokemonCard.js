import React, { useState, useEffect } from "react";
import { Col, ListGroup, ListGroupItem, Tab, Tabs } from "react-bootstrap";
import Card from "react-bootstrap/Card";

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
        <Card.Img
          style={{ height: 150, width: 150, margin: "auto" }}
          src={pokemon?.sprites.front_default}
        />
        <Card.Body>
          <Card.Title as="h4" style={{ fontWeight: 200 }}>
            {name}
          </Card.Title>
          <Tabs defaultActiveKey="types" justify>
            <Tab eventKey="types" title="Type(s)">
              <ListGroup variant="flush">
                {pokemon?.types.map((item) => (
                  <ListGroupItem key={item.type.name}>
                    {item.type.name}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Tab>
            <Tab eventKey="abilities" title="Abilities">
              <ListGroup variant="flush">
                {pokemon?.abilities.map((item) => (
                  <ListGroupItem key={item.ability.name}>
                    {item.ability.name}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Col>
  );
}

export { PokemonCard };
