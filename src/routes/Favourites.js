import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import { PokemonCard } from "../components/PokemonCard"
import { FavouritesContext } from "../helpers/FavouritesProvider"

export function Favourites() {

    const { favourites } = useContext(FavouritesContext)
    
    if (!Favourites) {
        return (
            <Container>
                Nothing here yet!
            </Container>
        )
    } 

    return (
        <Container fluid className="gap-3 d-grid" style={{padding: "0 10%"}}>
          <Row>
            {favourites?.map((pokemon, key) => (
              <PokemonCard key={key} name={pokemon} />
            ))}
          </Row>
        </Container>
      )
}