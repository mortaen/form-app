import { useState } from "react"
import styled from "styled-components"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"
import CreateCharacterForm from "./Components/CreateCharacterForm/CreateCharacterForm"

const INITIAL_DATA = [
  {
    name: "Harry",
    house: "Gryffindor",
  },
  {
    name: "Hermione",
    house: "Gryffindor",
  },
]

function App() {
  const [data, setData] = useState(INITIAL_DATA)

  return (
    <Router>
      <StyledMain className="app">
        <Switch>
          <Route exact path="/">
            Start
          </Route>
          <Route path="/new">
            <CreateCharacterForm onCreateCharacter={handleCreateCharacter} />
          </Route>
          <Route path="/characters">
            {data.map((character) => (
              <StyledAppCardDiv key={character.name}>
                {character.name} from {character.house}
              </StyledAppCardDiv>
            ))}
          </Route>
          <Route>ERROR 404 NOT FOUND</Route>
        </Switch>
        <StyledLink to="/new">New</StyledLink>
        <StyledLink to="/characters">Characters</StyledLink>
      </StyledMain>
    </Router>
  )

  function handleCreateCharacter({ name, house }) {
    // Add an entry to data with data from the form

    const newData = [
      ...data,
      {
        name: name,
        house: house,
      },
    ]
    setData(newData)
  }
}

const StyledMain = styled.main`
  max-width: 600px;
  margin: 0 auto;
`

const StyledAppCardDiv = styled.div`
  border: 0px solid #aaa;
  margin: 15px;
  padding: 15px;
  border-radius: 13px;

  box-shadow: 0px 0px 20px #dedede;
  display: flex;
`

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: lightsalmon;
  padding: 5px;
  text-decoration: none;
  border-radius: 7px;
  color: darkcyan;
`

export default App
