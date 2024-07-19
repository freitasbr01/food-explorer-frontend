import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container {...rest }>
      <span>{ Icon && <Icon className="icon" /> }</span>
      <input {...rest} />
    </Container>
  )
}