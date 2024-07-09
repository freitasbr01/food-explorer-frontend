import { Container } from './styles';

export function Button({ icon: Icon, title, loading = false, uniqueOrderCount, ...rest}) {
  return (
    <Container disable={loading} {...rest}>
      {Icon && <Icon />}
      <div>
        {loading ? 'Carregando...' : title}
        <span> {uniqueOrderCount} </span>
      </div>
    </Container>
  )
}