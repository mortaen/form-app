import styled from "styled-components"

function CreateCharacterForm({ onCreateCharacter }) {
  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <Label>
        Character Name:
        <Input type="text" name="characterName" required></Input>
      </Label>
      <Label>
        House:
        <Input type="text" name="house"></Input>
      </Label>
      <Button>create</Button>
    </Form>
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

const Button = styled.button`
  &:hover {
    color: lightsalmon;
  }
  font-size: 2rem;
  background: darkcyan;
  color: whitesmoke;
  border-radius: 10px;
  box-shadow: 10px 10px 8px #888888;
`

const Label = styled.label`
  font-size: 2rem;
  background: darkcyan;
  color: whitesmoke;
  border-radius: 10px;
  box-shadow: 10px 10px 8px #888888;
`

const Input = styled.input`
  font-size: 2rem;
  background: lightsalmon;
  color: whitesmoke;
  border-radius: 10px;
`

const Form = styled.form`
  margin: 2vh;
  display: flex;
  justify-content: space-evenly;
  border-radius: 10px;
`

export default CreateCharacterForm
