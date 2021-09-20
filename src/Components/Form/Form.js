import "./Form.css"

function Form({ onCreateCharacter }) {
  return (
    <form className="form" onSubmit={(event) => handleSubmit(event)}>
      <label>
        Character Name:
        <input type="text" name="characterName" required></input>
      </label>
      <label>
        House:
        <input type="text" name="house"></input>
      </label>
      <button>create</button>
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const { characterName, house } = form.elements
    console.log("name of character: " + characterName.value)
    console.log("house: " + house.value)

    onCreateCharacter({
      name: characterName.value,
      house: house.value,
    })

    form.reset()
    characterName.focus()
  }
}
export default Form
