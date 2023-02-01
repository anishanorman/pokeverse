import {
  Stack,
  Badge,
  Tabs,
  Tab,
  Image,
  ListGroup,
  ListGroupItem,
  Card,
} from "react-bootstrap";

export function PokemonDetailedCard({ pokemon }) {
  function Header() {
    return (
      <Stack direction="horizontal" gap={4}>
        <h2>{pokemon.name}</h2>
        {pokemon.types.map((type, key) => {
          return (
            <Badge className={type.type.name} key={key}>
              {type.type.name}
            </Badge>
          );
        })}
      </Stack>
    );
  }

  function Sprites() {
    return (
      <Card style={{ width: "40%" }}>
        <Tabs defaultActiveKey="default" justify>
          <Tab eventKey="default" title="Default">
            <Image
              style={{ width: "50%" }}
              src={pokemon.sprites.front_default}
              fluid
            />
            <Image
              style={{ width: "50%" }}
              src={pokemon.sprites.back_default}
              fluid
            />
          </Tab>
          <Tab eventKey="shiny" title="Shiny">
            <Image
              style={{ width: "50%" }}
              src={pokemon.sprites.front_shiny}
              fluid
            />
            <Image
              style={{ width: "50%" }}
              src={pokemon.sprites.back_shiny}
              fluid
            />
          </Tab>
        </Tabs>
      </Card>
    );
  }

  function Abilities() {
    return (
      <Card className="text-center">
        <Card.Header as="h4" style={{ fontWeight: 1000 }}>
          Abilities
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            {pokemon.abilities.map((item) => (
              <ListGroupItem key={item.ability.name}>
                {item.ability.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }

  function Stats() {
    return (
      <Card className="text-center">
        <Card.Header as="h4" style={{ fontWeight: 1000 }}>
          Base Stats
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroupItem key="base_experience">
            Experience: {pokemon.base_experience}
          </ListGroupItem>
          {pokemon.stats.map((stat) => (
            <ListGroupItem key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card>
    );
  }

  function Info() {
    return (
      <Card className="text-center">
        <Card.Header as="h4" style={{ fontWeight: 1000 }}>
          General Infomation
        </Card.Header>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroupItem key="id">ID: {pokemon.id}</ListGroupItem>
            <ListGroupItem key="height">
              Height: {pokemon.height / 10}m
            </ListGroupItem>
            <ListGroupItem key="weight">
              Weight: {pokemon.weight / 10}kg
            </ListGroupItem>
          </ListGroup>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card style={{ width: "50%", margin: "auto" }}>
      <Card.Header>
        <Header />
      </Card.Header>

      <Stack direction="horizontal" gap={4}>
        <Sprites />
        <Stack>
          <Info />
          <Abilities />
        </Stack>
        <Stats />
      </Stack>
    </Card>
  );
}
