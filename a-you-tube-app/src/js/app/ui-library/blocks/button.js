import styled from "styled-components"

const Button = styled.button`
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0.5em;
`
const PrimaryButton = Button.extend`
  background-color: teal;
`
export default Button
export { PrimaryButton }
