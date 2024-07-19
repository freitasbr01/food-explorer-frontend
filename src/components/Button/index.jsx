import { Container } from './styles';

export function Button({ icon: Icon, title, loading = false, uniqueOrderCount, onClick, ...rest}) {
  return (
    <Container disable={loading} {...rest} onClick={onClick}>
      {Icon && <Icon />}
      <div>
        {loading ? 'Carregando...' : title}
        <span> {uniqueOrderCount} </span>
      </div>
    </Container>
  )
}