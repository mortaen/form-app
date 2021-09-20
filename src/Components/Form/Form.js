function CreateCharacterForm() {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label>
        Character Name:
        <input type="text" name="characterName"></input>
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
    form.reset()
    characterName.focus()
  }
}
export default CreateCharacterForm
