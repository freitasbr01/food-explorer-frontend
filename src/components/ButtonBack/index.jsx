import { Container } from './styles';

export function ButtonBack({ title, icon: Icon, ...rest }) {
  return (
    <Container {...rest}>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}