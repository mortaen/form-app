import styled from "styled-components"

function CreateCharacterForm({ onCreateCharacter }) {
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <Label>
        Character Name:
        <Input type="text" name="characterName" required></Input>
      </Label>
      <Label>
        House:
        <Input type="text" name="house"></Input>
      </Label>
      <Button>create</Button>
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

const Button = styled.button`
  &:hover {
    color: palevioletred;
  }
  font-size: 3rem;
`

const Label = styled.label`
  font-size: 3rem;
`

const Input = styled.input`
  font-size: 3rem;
`

export default CreateCharacterForm
