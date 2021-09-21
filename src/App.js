import { useState } from "react"
import "./App.css"
import CreateCharacterForm from "./Components/CreateCharacterForm/CreateCharacterForm"

function App() {
  const [data, setData] = useState([])
  return (
    <div className="App">
      <main>
        <CreateCharacterForm onCreateCharacter={handleCreateCharacter} />
        {data.map((character) => (
          <div key={character.name}>
            {character.name} from {character.house}
          </div>
        ))}
      </main>
    </div>
  )

  function handleCreateCharacter({ name, house }) {
    const newData = [...data, { name: name, house: house }]
    setData(newData)
  }
}

export default App
