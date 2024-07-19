import { Container } from './styles';


export function Ingredient({ title, ...rest }) {
  return (
    <Container {...rest}>
      <span>{title}</span>
    </Container>
  )
}