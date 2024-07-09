import { Container } from './styles';

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container {...rest }>
      { Icon && <Icon size={14} className="icon" /> }
      <input {...rest} />
    </Container>
  )
}